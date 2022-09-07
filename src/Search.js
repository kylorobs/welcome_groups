import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const Search = ({ search }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        search(e.target.value);
    };

    return (
        <div className="max-w-3xl m-16 mx-auto">
            <div className="relative rounded-md border border-[#ed7d79] px-3 py-2 shadow-sm focus-within:border-[#ed7d79] focus-within:ring-1 focus-within:ring-#1ba39c">
                <label
                    htmlFor="name"
                    className="absolute -top-5 left-6 -mt-px inline-block bg-white px-1 text-md font-medium text-gray-900"
                >
                    Search By Group
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleSearch}
                    className="block w-full border-0 p-8 text-gray-900 placeholder-[#1ba39c] focus:ring-0 sm:text-4xl"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon className="h-10 w-10 text-[#ed7d79]" aria-hidden="true" />
                </div>
            </div>
        </div>
    );
};

export default Search;
