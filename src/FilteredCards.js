/* eslint-disable react/destructuring-assignment */
import SecondaryCard from './SecondaryCard';

export default function FilteredCards({ data, favouriteEvent, showEventDetail, isLive = false }) {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((event) => (
                <SecondaryCard
                    favourited={event.favourited}
                    infoClick={showEventDetail}
                    favouriteClick={favouriteEvent}
                    title={event.group_name}
                    date={event.date_time}
                    id={event.id}
                    imageUrl={event.group_logo}
                    sessionUrl={isLive && event.session_url}
                />
            ))}
        </ul>
    );
}
