import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../api/fetchData";
import { FaStar } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import MovieList from "../components/MovieList";
import altImage from "../assets/img-na.jpg";
import Loader from "../components/Loader";

function MovieDetail() {
    // Get movie_id from route
    const { movie_id } = useParams();
    // Get Detail movie by movie id
    const { data, isLoading } = useQuery({
        queryKey: ["movieDetail", movie_id],
        queryFn: () => fetchData(movie_id),
    });

    return (
        <main className="m-4">
            <div className="cursor-default mb-8 gap-8 md:gap-4 lg:gap-4 p-4 flex flex-col lg:flex-row lg:items-center bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                <div className="w-full lg:w-1/2 grid">
                    {/* show loader first before image */}
                    {isLoading ? (
                        <div className="place-self-center">
                            <Loader />
                        </div>
                    ) : (
                        <img
                            src={
                                data?.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}`
                                    : altImage
                            }
                            alt={data?.title}
                            className="rounded-xl h-[50vh] object-cover self-start"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    {/* Movie Title  */}
                    <h1 className="text-3xl font-[800] text-secondary">
                        {data?.title}
                    </h1>
                    <div className="flex gap-4">
                        {/* Movie Rating  */}
                        <p className="text-gray-400">
                            <span className="flex-none badge badge-grey-800 font-semibold text-warning mr-1 ">
                                <span className="mr-1">
                                    <FaStar />
                                </span>
                                {data?.vote_average.toFixed(2)}
                            </span>
                            IMDb
                        </p>
                        {/* Movie Duration  */}
                        <p className="text-gray-400">
                            <span className="flex-none badge badge-grey-800 font-semibold text-success mr-1 ">
                                <span className="mr-1">
                                    <BsClock />
                                </span>
                                {data?.runtime}
                            </span>
                            Minutes
                        </p>
                    </div>
                    {/* Release Date  */}
                    <div>
                        <p className="text-gray-500">Realease Date: </p>
                        <p>
                            {new Date(data?.release_date).toLocaleDateString(
                                "en-US",
                                {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </p>
                    </div>
                    {/* Movie Synopis Overview */}
                    <div>
                        <p className="text-gray-500">Synopsis:</p>
                        <p className="max-w-lg w-full">{data?.overview}</p>
                    </div>
                    {/* Movie Genre  */}
                    <div>
                        <p className="text-gray-500">Genre:</p>
                        <div className="flex gap-2">
                            {data?.genres.map((genre: any) => {
                                return (
                                    <div
                                        key={genre.id}
                                        className="rounded-lg max-w-md bg-zinc-600 text-center flex items-center text-sm p-1"
                                    >
                                        {genre.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* Similar Movies list, have 2 props first is for api url, second for title*/}
            <MovieList
                category={`${movie_id}/similar`}
                titleCategory="Similar Movie"
            />
        </main>
    );
}

export default MovieDetail;
