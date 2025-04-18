import Movie from "./Movie";

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};

//render search movie result from searchResult Data queryKey:"search"
function SearchList({ searchResult }: { searchResult: Movie[] }) {
    return (
        <section className="lg:px-4 md:px-2 h-full w-full mb-4">
            <div className="flex flex-wrap justify-evenly gap-4">
                {searchResult?.map((movie: Movie) => {
                    const { id, title, poster_path, vote_average } = movie;
                    return (
                        <Movie
                            key={id}
                            movie_id={id}
                            title={title}
                            poster={poster_path}
                            star={vote_average}
                        />
                    );
                })}
            </div>
        </section>
    );
}
export default SearchList;
