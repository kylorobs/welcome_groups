import { useState } from 'react';
import Desktop from './Desktop';
import Drawer from './Drawer';
import EventDetail from './EventDetail';
import Favourites from './Favourites';
import Search from './Search';
import Upcoming from './Upcoming';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleInfoClick = (id) => {
        setIsOpen(true);
    };

    const handleFavouriteClick = (id) => {
        // find event
        // toggle favourited
        // update local storage
    };

    return (
        <div className="App">
            <div className="min-h-screen w-full">
                <Drawer open={isOpen} setOpen={setIsOpen}>
                    <EventDetail
                        title="KCL Rugby Club"
                        description="Being KCL's Most improved Club in previous years, our society is one of the fastest growing sports clubs on campus and caters to all levels of play. We pride ourselves on our academic and cultural diversity with athletes from around the world studying differing degrees."
                    />
                </Drawer>
                <h1 className="text-5xl"> Upcoming Student Group Events</h1>
                <div className="bg-white p-8 pt-16 md:p-32 overflow-y-scroll">
                    <section className="py-8">
                        <div className="border-b border-gray-200 pb-5 ">
                            <h2 className="text-4xl font-medium leading-6 ">Favourited events</h2>
                        </div>
                        <Favourites showEvent={handleInfoClick} />
                        {/* <div className="my-16">
                            <p>You can favourite upcoming events so they remain pinned to the top of the page.</p>
                        </div> */}
                    </section>
                    <div className="border-b mb-16 border-gray-200 pb-5">
                        <h2 className="text-4xl font-medium leading-6 ">Upcoming Student Group Events</h2>
                    </div>
                    <Search />
                    <Upcoming showEventDetail={handleInfoClick} />
                </div>
            </div>
        </div>
    );
}

export default App;
