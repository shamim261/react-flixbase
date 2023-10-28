export default function TVCard({ data }) {
    const { name, overview, poster_path } = data;

    const poster_url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
            <a href="#">
                <img className="rounded-t-lg" src={poster_url} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            </div>
        </div>
    );
}
