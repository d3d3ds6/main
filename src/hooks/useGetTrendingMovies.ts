// hooks/useGetTrendingMovies.ts
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "6cd9178e895d7ed836f42e9744401070";

export type TimeWindow = "day" | "week";

export const useGetTrendingMovies = (timeWindow: TimeWindow = "day") => {
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(
        `${baseUrl}/trending/movie/${timeWindow}?api_key=${apiKey}`
      );
      return response.data.results;
    },
    queryKey: ["trendingMovies", timeWindow],
  });
};