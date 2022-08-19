const Desktop = ({ children }) => (
    <div className="relative bg-cover bg-[url('https://res.cloudinary.com/kclsu-media/image/upload/v1/temporary/pexels-pixabay-163452_o4onxe')] w-full flex items-center h-full justify-center">
        <div className="bg-indigo-600 absolute w-full h-full opacity-90" />
        {children}
    </div>
);

export default Desktop;
