import Socials from './Socials';

const EventDetail = ({ title, description }) => (
    <article className="w-full p-16 bg-white relative">
        <div className="flex flex-col items-center mb-8">
            <h2 className="text-5xl mb-8">{title}</h2>
            <Socials />
        </div>
        <div>
            <p className="text-md">{description}</p>
        </div>
        <div className="my-4">
            <p>
                <span className="font-bold">Date: </span> 21 September
            </p>
            <p>
                <span className="font-bold">Time: </span> 12:00
            </p>
            <p>
                <span className="font-bold">Host: </span> Youtube
            </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <kclsu-button purple center>
                Watch on Youtube
            </kclsu-button>
        </div>
    </article>
);

export default EventDetail;
