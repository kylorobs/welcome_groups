import SecondaryCard from './SecondaryCard';

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
];

export default function Favourites() {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {people.map((event) => (
                <SecondaryCard
                    favourited
                    title={event.title}
                    date={event.date}
                    id={event.title}
                    imageUrl={event.imageUrl}
                />
            ))}
        </ul>
    );
}
