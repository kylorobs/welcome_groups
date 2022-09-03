import PrimaryCard from './PrimaryCard';

export default function Upcoming({ showEventDetail, favouriteEvent, events }) {
    if (!events) return 'loading';
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((event) => (
                <PrimaryCard
                    infoClick={showEventDetail}
                    favouriteClick={favouriteEvent}
                    favourited={event.favourited}
                    title={event.group_name}
                    date={event.session_date_time}
                    id={event.id}
                    imageUrl={event.group_logo}
                />
            ))}
        </ul>
    );
}
