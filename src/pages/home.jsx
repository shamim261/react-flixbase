import MovieList from '../Components/MovieList';

export default function Home({ apiPath }) {
    return <MovieList apiPath={apiPath} />;
}
