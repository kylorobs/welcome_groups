/* eslint-disable no-restricted-syntax */
import { useCallback, useEffect, useState } from 'react';
import { retrieveLocallyStoredValue, setLocallyStoredValue } from './libs';

const UseData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
    }

    function isFavourited(id) {
        const savedFavs = retrieveLocallyStoredValue('welcome_favourites');
        if (!savedFavs || savedFavs.length < 1) return false;
        return savedFavs.find((saved) => saved === id);
    }

    function buildArray(fetchedData) {
        const ar = [];
        for (const node in fetchedData) {
            if (fetchedData[node]) {
                const event = fetchedData[node];
                event.id = node;
                event.favourited = isFavourited(event.id);
                const sessionDateObj = new Date(event.session_date_time);
                event.date_time = `${sessionDateObj.toDateString()} ${sessionDateObj.toLocaleTimeString()}`;
                if (!(new Date() > addHours(1, sessionDateObj))) ar.push(event);
            }
        }
        return ar;
    }

    const createDataArray = useCallback(buildArray, []);

    function sortByDate(ar) {
        return ar.sort((a, b) => new Date(a.session_date_time) - new Date(b.session_date_time));
    }

    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            // FETCH DATA
            const dataurl = process.env.REACT_APP_DATA_URL;
            const dataResponse = await fetch(dataurl).catch((er) => console.log(er));
            const dataResult = await dataResponse.json();
            setData(sortByDate(createDataArray(dataResult)));
            setIsLoading(false);
        }

        if (!data) fetchEvents();
    }, [data, createDataArray]);

    function findEvent(id) {
        if (!data) return null;
        return data.find((groupEvent) => groupEvent.id === id);
    }

    function filerBySearchTerm(ar, search) {
        return ar.filter((evt) => evt.group_name.includes(search));
    }

    function removeIdFromSavedFavourites(id) {
        const savedFavs = retrieveLocallyStoredValue('welcome_favourites');
        if (!savedFavs || savedFavs.length < 1) return;
        const updated = savedFavs.filter((saved) => saved !== id);
        setLocallyStoredValue('welcome_favourites', updated);
    }

    function addIdToSavedFavourites(id) {
        const savedFavs = retrieveLocallyStoredValue('welcome_favourites');
        const favourites = savedFavs || [];
        favourites.push(id);
        setLocallyStoredValue('welcome_favourites', favourites);
    }

    const favouriteEvent = (id) => {
        if (!data) return;
        const isAlreadyFavourited = isFavourited(id);
        if (isAlreadyFavourited) removeIdFromSavedFavourites(id);
        const dataCopy = data.map((event) => {
            if (event.id === id) {
                if (!isAlreadyFavourited) addIdToSavedFavourites(id);
                const evtCopy = { ...event };
                evtCopy.favourited = !evtCopy.favourited;
                return evtCopy;
            }
            return event;
        });
        setData(dataCopy);
    };

    const selectEvent = (id) => {
        const evt = findEvent(id);
        if (evt) setSelectedEvent(evt);
    };

    const clearSelected = () => setSelectedEvent(null);

    return {
        isLoading,
        data: searchTerm ? filerBySearchTerm(data, searchTerm) : data,
        selectEvent,
        clearSelected,
        favouriteEvent,
        search: setSearchTerm,
        selectedEvent,
        favourites: data && data.filter((evt) => evt.favourited),
        liveToday:
            data && data.filter((evt) => new Date(evt.session_date_time).toDateString() === new Date().toDateString()),
    };
};

export default UseData;
