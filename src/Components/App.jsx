import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import MovieDetails from '../pages/movieDetails';
import Movies from '../pages/movies';
import Popular from '../pages/popular';
import Search from '../pages/search';
import TvSeries from '../pages/tvSeries';
import Layout from './Layout';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home apiPath="movie/now_playing" />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/search/:q" element={<Search />} />
                    <Route path="/tv-shows" element={<TvSeries />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
