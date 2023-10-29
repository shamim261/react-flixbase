import MovieList from '../Components/MovieList';
import useTitle from '../hooks/useTitle';

export default function Home({ apiPath, title }) {
    useTitle(title);
    return <MovieList apiPath={apiPath} />;
}
