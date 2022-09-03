import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import PrimaryCard from './PrimaryCard';

const people = [
    {
        title: 'KCL Rugby',
        date: '29 Sept 10:00AM',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        title: 'Womens Volleyball',
        date: '29 Sept 10:00AM',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        title: 'The Harry Potter Society',
        date: '29 Sept 10:00AM',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        title: 'KCL Rugby',
        date: '29 Sept 10:00AM',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        title: 'Womens Volleyball',
        date: '29 Sept 10:00AM',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        title: 'The Harry Potter Society',
        date: '29 Sept 10:00AM',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
];

export default function Upcoming({ showEventDetail }) {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {people.map((event) => (
                <PrimaryCard
                    infoClick={showEventDetail}
                    title={event.title}
                    date={event.date}
                    id={event.title}
                    imageUrl={event.imageUrl}
                />
            ))}
        </ul>
    );
}
