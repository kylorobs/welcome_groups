/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';

const UseData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function createDataArray(fetchedData) {
        const ar = [];
        for (const node in fetchedData) {
            if (fetchedData[node]) {
                fetchedData[node].id = node;
                fetchedData[node].favourited = false;
                ar.push(fetchedData[node]);
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
        data,
        selectEvent,
        clearSelected,
        favouriteEvent,
        selectedEvent,
        favourites: data && data.filter((evt) => evt.favourited),
    };
};

export default UseData;
