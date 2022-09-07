import PrimaryCard from './PrimaryCard';

export default function Upcoming({ showEventDetail, favouriteEvent, events }) {
    if (!events) return 'loading';

    if (events && events.length < 1) return <p>No results found.</p>;

    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((event) => (
                <PrimaryCard
                    infoClick={showEventDetail}
                    favouriteClick={favouriteEvent}
                    favourited={event.favourited}
                    title={event.group_name}
                    date={event.date_time}
                    id={event.id}
                    imageUrl={event.group_logo}
                />
            ))}
        </ul>
    );
}
