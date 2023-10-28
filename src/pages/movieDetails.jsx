import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function MovieDetails() {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_TMBD_API_KEY
    }`;

    function toUSD(num) {
        // Create our number formatter.
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        const final = formatter.format(num);

        return final;
    }

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(apiUrl);

            setDetails(data);
        }
        getData();
    }, [apiUrl]);

    const {
        original_title,
        overview,
        poster_path,
        release_date,
        imdb_id,
        budget,
        genres,
        revenue,
        runtime,
        vote_average,
        vote_count,
    } = details;

    console.log(details);

    const poster_url = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <section className="flex flex-wrap justify-around  py-5 ">
            <div className="max-w-sm">
                <img className="rounded" src={poster_url} alt="" />
            </div>
            <div className="max-w-2xl mx-auto text-gray-700 my-5 ">
                <h1 className="text-4xl dark:text-slate-200 font-bold">{original_title}</h1>
                <p className="my-3 text-lg ">{overview}</p>
                {genres ? (
                    <p className="flex flex-wrap gap-2">
                        {genres.map((genre) => (
                            <span key={genre.id} className="text-lg border p-2 rounded">
                                {genre.name}
                            </span>
                        ))}
                    </p>
                ) : (
                    ''
                )}
                {/* rating section */}
                <div className="flex items-center my-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2 text-lg  text-gray-900 dark:text-white">{vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <span className="text-lg  text-gray-900  dark:text-white">
                        {vote_count} reviews
                    </span>
                </div>
                <p className="text-lg mt-2">
                    <span className="font-bold">Runtime : </span> {runtime} min.
                </p>
                <p className="text-lg mt-2">
                    <span className="font-bold">Budget : </span> {toUSD(budget)}
                </p>
                <p className="text-lg mt-2">
                    <span className="font-bold">Revenue : </span> {toUSD(revenue)}
                </p>
                <p className="text-lg mt-2">
                    <span className="font-bold">Relase Date : </span> {release_date}
                </p>
                <p className="text-lg mt-2">
                    <span className="font-bold">IMDB Code : </span> {imdb_id}
                </p>
            </div>
        </section>
    );
}
