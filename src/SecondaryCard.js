import { InformationCircleIcon, HeartIcon } from '@heroicons/react/20/solid';

const SecondaryCard = ({ title, imageUrl, date, id, favourited, favouriteClick, infoClick }) => (
    <li key={id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow my-8">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                    <h3 className="truncate  font-medium text-3xl text-gray-900">{title}</h3>
                </div>
                <p className="mt-1 truncate text-xl text-gray-500">{date}</p>
            </div>
            <img className="h-20 w-20 flex-shrink-0 rounded-full bg-gray-300" src={imageUrl} alt="" />
        </div>
        <div>
            <div className="-mt-px flex divide-x divide-gray-200">
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
                <div className="-ml-px flex w-0 flex-1">
                    <button
                        type="button"
                        onClick={() => favouriteClick(id)}
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-lg font-medium text-gray-700 hover:text-gray-500"
                    >
                        <HeartIcon
                            className={`h-10 w-10 ${favourited ? 'text-[#fa7185]' : 'text-gray-400'}`}
                            aria-hidden="true"
                        />
                        <span className="ml-3">Favourite</span>
                    </button>
                </div>
            </div>
        </div>
    </li>
);

export default SecondaryCard;
