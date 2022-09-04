import Drawer from './Drawer';
import EventDetail from './EventDetail';
import FilteredCards from './FilteredCards';
import Search from './Search';
import Upcoming from './Upcoming';
import UseData from './useData';

function App() {
    const { data, favourites, favouriteEvent, selectEvent, selectedEvent, clearSelected, search, liveToday } =
        UseData();
    console.log(data);

    const favouritesSection = (
        <section className="pb-8">
            <div className="border-b border-gray-200 pb-5 ">
                <h2 className="text-4xl font-medium leading-6 ">Favourited Sessions</h2>
            </div>
            {favourites && favourites.length > 0 ? (
                <FilteredCards showEventDetail={selectEvent} data={favourites} favouriteEvent={favouriteEvent} />
            ) : (
                <div className="my-16">
                    <p>You can favourite upcoming events so they remain pinned to the top of the page.</p>
                </div>
            )}
        </section>
    );

    const liveTodaySection = (
        <section className="pb-8">
            <div className="border-b border-gray-200 pb-5 ">
                <h2 className="text-4xl font-medium leading-6 ">Today's Sessions</h2>
            </div>
            <FilteredCards showEventDetail={selectEvent} data={liveToday} favouriteEvent={favouriteEvent} isLive />
        </section>
    );

    return (
        <div className="App">
            <div className="min-h-screen w-full">
                <Drawer open={!!selectedEvent} exit={clearSelected}>
                    {selectedEvent && <EventDetail event={selectedEvent} />}
                </Drawer>
                <div className="bg-white p-8 pt-16 md:p-32 overflow-y-scroll">
                    {favouritesSection}
                    {liveToday && liveToday.length > 0 && liveTodaySection}
                    <div className="border-b mb-16 border-gray-200 pb-5">
                        <h2 className="text-4xl font-medium leading-6 ">Upcoming Student Group Sessions</h2>
                    </div>
                    <Search search={search} />
                    <Upcoming events={data} showEventDetail={selectEvent} favouriteEvent={favouriteEvent} />
                </div>
            </div>
        </div>
    );
}

export default App;
