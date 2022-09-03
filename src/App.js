import { useState } from 'react';
import Desktop from './Desktop';
import Drawer from './Drawer';
import EventDetail from './EventDetail';
import Favourites from './Favourites';
import Search from './Search';
import Upcoming from './Upcoming';
import UseData from './useData';

function App() {
    const { data, favourites, favouriteEvent, selectEvent, selectedEvent, clearSelected } = UseData();
    console.log(data);

    const favouritesSection = (
        <section className="py-8">
            <div className="border-b border-gray-200 pb-5 ">
                <h2 className="text-4xl font-medium leading-6 ">Favourited events</h2>
            </div>
            <Favourites showEventDetail={selectEvent} favourites={favourites} favouriteEvent={favouriteEvent} />
        </section>
    );

    return (
        <div className="App">
            <div className="min-h-screen w-full">
                <Drawer open={!!selectedEvent} exit={clearSelected}>
                    <EventDetail event={selectEvent} />
                </Drawer>
                <h1 className="text-5xl"> Upcoming Student Group Events</h1>
                <div className="bg-white p-8 pt-16 md:p-32 overflow-y-scroll">
                    {favouritesSection}
                    <div className="border-b mb-16 border-gray-200 pb-5">
                        <h2 className="text-4xl font-medium leading-6 ">Upcoming Student Group Events</h2>
                    </div>
                    <Search />
                    <Upcoming events={data} showEventDetail={selectEvent} favouriteEvent={favouriteEvent} />
                </div>
            </div>
        </div>
    );
}

export default App;
