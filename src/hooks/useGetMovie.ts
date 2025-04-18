import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "edffedf4fc57454b3caa979a5b177444";

export type Category =
    | "popular"
    | "upcoming"
    | "now_playing"
    | "top_rated"
    | string; //this is for dynamic value of movie_id,

//it is a custom hook to fetch data from api, take "param" argument to add the specific URL, so it's reusable
export const useGetMovie = (param: Category) => {
    return useQuery({
        queryFn: async () => {
            //make get request
            const response = await axios.get(
                //API URL
                `${baseUrl}/movie/${param}?api_key=${apiKey}`
            );
            return response.data.results;
        },
        queryKey: ["moviesData", param],
    });
};
