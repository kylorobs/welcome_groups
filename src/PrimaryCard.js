import { InformationCircleIcon, HeartIcon } from '@heroicons/react/20/solid';

const PrimaryCard = ({ title, imageUrl, date, id, infoClick }) => (
    <li
        key={id}
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-md"
    >
        <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full border" src={imageUrl} alt="" />
            <h3 className="mt-6 text-3xl font-medium text-gray-900">{title}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Date</dt>
                <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-lg font-medium text-green-800">
                        {date}
                    </span>
                </dd>
            </dl>
        </div>
        <div>
            <div className="-mt-px flex divide-x divide-gray-200 ">
                <div className="flex w-0 flex-1">
                    <button
                        type="button"
                        onClick={() => infoClick(id)}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-lg font-medium text-gray-700 hover:text-gray-500"
                    >
                        <InformationCircleIcon className="h-10 w-10 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Info</span>
                    </button>
                </div>
                <div className="-ml-px flex w-0 flex-1 ">
                    <button
                        type="button"
                        onClick={() => console.log(id)}
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-lg font-medium text-gray-700 hover:text-gray-500"
                    >
                        <HeartIcon className="h-10 w-10 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Favourite</span>
                    </button>
                </div>
            </div>
        </div>
    </li>
);

export default PrimaryCard;
