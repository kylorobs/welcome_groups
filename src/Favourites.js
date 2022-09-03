/* eslint-disable react/destructuring-assignment */
import SecondaryCard from './SecondaryCard';

export default function Favourites({ favourites, favouriteEvent, showEventDetail }) {
    if (!favourites || favourites.length === 0) {
        return (
            <div className="my-16">
                <p>You can favourite upcoming events so they remain pinned to the top of the page.</p>
            </div>
        );
    }

    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favourites.map((event) => (
                <SecondaryCard
                    favourited
                    infoClick={showEventDetail}
                    favouriteClick={favouriteEvent}
                    title={event.group_name}
                    date={event.session_date_time}
                    id={event.id}
                    imageUrl={event.group_logo}
                />
            ))}
        </ul>
    );
}
