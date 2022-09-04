/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';

const UseData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
    }

    function createDataArray(fetchedData) {
        const ar = [];
        for (const node in fetchedData) {
            if (fetchedData[node]) {
                const event = fetchedData[node];
                event.id = node;
                event.favourited = false;
                const sessionDateObj = new Date(event.session_date_time);
                event.date_time = `${sessionDateObj.toDateString()} ${sessionDateObj.toLocaleTimeString()}`;
                if (!(new Date() > addHours(1, sessionDateObj))) ar.push(event);
            }
        }
        return ar;
    }

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
            console.log(dataResult);
            setData(sortByDate(createDataArray(dataResult)));
            setIsLoading(false);
        }

        if (!data) fetchEvents();
    }, [data]);

    function findEvent(id) {
        if (!data) return null;
        return data.find((groupEvent) => groupEvent.id === id);
    }

    function filerBySearchTerm(ar, search) {
        return ar.filter((evt) => evt.group_name.includes(search));
    }

    const favouriteEvent = (id) => {
        if (!data) return;
        const dataCopy = data.map((event) => {
            if (event.id === id) {
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
