import EventDetail from './EventDetail';

function App() {
    return (
        <div className="App">
            <div className="grid grid-cols-2 gris h-screen w-full">
                <div className="bg-indigo-600 w-full flex items-center h-full justify-center">
                    <EventDetail
                        title="KCL Rugby Club"
                        description="Being KCL's Most improved Club in previous years, our society is one of the fastest growing sports clubs on campus and caters to all levels of play. We pride ourselves on our academic and cultural diversity with athletes from around the world studying differing degrees."
                    />
                </div>
                <div className="bg-white p-8 pt-16 overflow-y-scroll">
                    <h1 className="text-5xl"> Upcoming Student Group Events</h1>
                    <p> See the upcoming events</p>
                    ----More Events ---
                </div>
            </div>
        </div>
    );
}

export default App;
