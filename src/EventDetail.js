import Socials from './Socials';

const EventDetail = ({ event }) => {
    const date = new Date(event.session_date_time);

    return (
        <article className="w-full p-16 bg-white relative">
            <div className="mx-auto pb-16">
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full border" src={event.group_logo} alt="" />
            </div>
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-5xl mb-8">{event.group_name}</h2>
                <Socials data={event} />
            </div>
            <div>
                <p className="text-md">{event.session_description}</p>
                <p className="my-8">
                    Visit the <a href={event.website_url}>group's webpage.</a>
                </p>
            </div>
            <div className="my-4">
                <p className="my-4">
                    <span className="font-bold">Date: </span> {date.toDateString()}
                </p>
                <p className="my-4">
                    <span className="font-bold">Time: </span> {date.toLocaleTimeString()}
                </p>
                <p className="my-4">
                    <span className="font-bold">Host: </span> {event.session_platform || ''}
                </p>
            </div>
            <div className="mt-16">
                {event.session_url && (
                    <kclsu-button newtab purple center link={event.session_url}>
                        Watch on {event.session_platform}
                    </kclsu-button>
                )}
            </div>
        </article>
    );
};

export default EventDetail;
