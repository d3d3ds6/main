import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import TrendingMovies from "../components/TrendingMovies";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "6cd9178e895d7ed836f42e9744401070";

function SearchPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  // useDebounce is custom hooks to delay fetching data
  const debounceSearch = useDebounce(search, 500);
  // Fetch data by query received from search input
  const { data, isLoading } = useQuery({
    //caching the data with this key and use it to render the search result
    queryKey: ["search", debounceSearch],
    queryFn: async () => {
      const response = await axios.get(
        `${baseUrl}/search/movie?query=${search}&api_key=${apiKey}`
      );
      return response.data.results;
    },
    enabled: debounceSearch.length > 0,
  });

  return (
    <main className="flex flex-col items-center gap-8 mx-4 my-10">
      <SearchBar handleSearch={handleSearch} terms={search} />
      
      {/* Show trending movies when no search is being performed */}
      {!debounceSearch && <TrendingMovies />}
      
      {isLoading ? (
        <div className="my-[10rem]">
          <Loader />
        </div>
      ) : (
        debounceSearch && <SearchList searchResult={data} />
      )}
    </main>
  );
}

export default SearchPage;