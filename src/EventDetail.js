import Socials from './Socials';

const { Avatar, Button } = require('flowbite-react');

const EventDetail = ({ title, description }) => (
    <article className="h-3/4 w-2/3 p-16 bg-white relative">
        <div className="flex flex-col items-center mb-8">
            <Avatar
                rounded
                size="xl"
                img="https://res.cloudinary.com/kclsu-media/image/upload/v1/temporary/VCHqDedY_400x400_gucnga"
                bordered
            />
            <h2>{title}</h2>
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
