import { useRef } from "react";
import { useGetMovie, Category } from "../hooks/useGetMovie";
import Loader from "./Loader";
import Movie from "./Movie";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

function MovieList({
  category,
  titleCategory,
}: {
  category: Category;
  titleCategory: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetMovie(category);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <section className="h-full w-full mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-[600] text-gray-400">{titleCategory}</h1>
        
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="bg-transparent hover:bg-gray-800 text-gray-300 rounded-full p-1 transition-all"
            aria-label="Scroll left"
            data-testid="scroll-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="bg-transparent hover:bg-gray-800 text-gray-300 rounded-full p-1 transition-all"
            aria-label="Scroll right"
            data-testid="scroll-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-max gap-4 overflow-x-scroll no-scrollbar"
      >
        {data?.map((movie: Movie) => {
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

export default MovieList;