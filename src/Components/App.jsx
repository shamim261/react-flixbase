import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import MovieDetails from '../pages/movieDetails';
import Popular from '../pages/popular';
import Search from '../pages/search';
import TvSeries from '../pages/tvSeries';
import Upcoming from '../pages/upcoming';
import Layout from './Layout';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home apiPath="movie/top_rated" />} />
                    <Route path="/upcoming" element={<Upcoming apiPath="movie/upcoming" />} />
                    <Route path="/popular" element={<Popular apiPath="movie/popular" />} />
                    <Route path="/search/:q" element={<Search />} />
                    <Route path="/tv-shows" element={<TvSeries apiPath="tv/popular" />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
