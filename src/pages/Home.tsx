import Header from "../components/Header";
import MovieList from "../components/MovieList";

function Home() {
    return (
        <main className="flex flex-col items-center gap-8 mx-4 my-4">
            <Header />
            {/* Show Movie List Based on each Category  */}
            <MovieList category="popular" titleCategory="Popular" />
            <MovieList category="upcoming" titleCategory="Upcoming" />
            <MovieList category="now_playing" titleCategory="Now Playing" />
            <MovieList category="top_rated" titleCategory="Top Rated" />
        </main>
    );
}

export default Home;
