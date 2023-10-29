import MovieList from '../Components/MovieList';
import useTitle from '../hooks/useTitle';

export default function Upcoming({ apiPath, title }) {
    useTitle(title);
    return <MovieList apiPath={apiPath} />;
}
