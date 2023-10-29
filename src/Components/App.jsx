import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import MovieDetails from '../pages/movieDetails';
import PageNotFound from '../pages/pageNotFound';
import Popular from '../pages/popular';
import Search from '../pages/search';
import TopRated from '../pages/topRated';
import Upcoming from '../pages/upcoming';
import Layout from './Layout';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home apiPath="movie/now_playing" title="Home" />} />
                    <Route
                        path="/upcoming"
                        element={<Upcoming apiPath="movie/upcoming" title="Upcoming" />}
                    />
                    <Route
                        path="/popular"
                        element={<Popular apiPath="movie/popular" title="Popular" />}
                    />
                    <Route path="/search" element={<Search apiPath="search/movie" />} />
                    <Route
                        path="/top-rated"
                        element={<TopRated apiPath="movie/top_rated" title="Top Rated" />}
                    />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
