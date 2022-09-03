import Socials from './Socials';

const EventDetail = ({ event }) => (
    <article className="w-full p-16 bg-white relative">
        <div className="flex flex-col items-center mb-8">
            <h2 className="text-5xl mb-8">{event.group_name}</h2>
            <Socials />
        </div>
        <div>
            <p className="text-md">{event.session_description}</p>
        </div>
        <div className="my-4">
            <p>
                <span className="font-bold">Date: </span> 21 September
            </p>
            <p>
                <span className="font-bold">Time: </span> 12:00
            </p>
            <p>
                <span className="font-bold">Host: </span> {event.session_platform}
            </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <kclsu-button purple center>
                Watch on {event.session_platform}
            </kclsu-button>
        </div>
    </article>
);

export default EventDetail;
