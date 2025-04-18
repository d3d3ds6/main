import { useRef, useState } from "react";
import { useGetTrendingMovies, TimeWindow } from "../hooks/useGetTrendingMovies";
import Movie from "./Movie";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

function TrendingMovies() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day");
  const { data } = useGetTrendingMovies(timeWindow);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-[600] text-gray-400">Trending Movies</h1>
        
        <div className="flex items-center gap-2">
          <div className="flex mr-2">
            <button 
              onClick={() => setTimeWindow("day")}
              className={`px-4 py-1 rounded-l-full transition-all duration-300 text-sm ${
                timeWindow === "day" 
                  ? "bg-red-600 text-white font-bold" 
                  : "bg-gray-700 text-gray-300"
              }`}
              data-testid="trending-day-btn"
            >
              <span className="flex items-center">
                <span className="mr-1">🔥</span> Today
              </span>
            </button>
            
            <button 
              onClick={() => setTimeWindow("week")}
              className={`px-4 py-1 rounded-r-full transition-all duration-300 text-sm ${
                timeWindow === "week" 
                  ? "bg-blue-600 text-white font-bold" 
                  : "bg-gray-700 text-gray-300"
              }`}
              data-testid="trending-week-btn"
            >
              <span className="flex items-center">
                <span className="mr-1">🌟</span> Week
              </span>
            </button>
          </div>
          
          <button
            onClick={scrollLeft}
            className="bg-transparent hover:bg-gray-800 text-gray-300 rounded-full p-1 transition-all"
            aria-label="Scroll left"
            data-testid="trending-scroll-left"
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
            data-testid="trending-scroll-right"
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

export default TrendingMovies;