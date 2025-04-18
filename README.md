# Movie App

This is a React application that allows users to search for and view information about movies.

## Screenshots

### Homepage

[![screely-1692294999327.png](https://i.postimg.cc/ydZMdS9D/screely-1692294999327.png)](https://postimg.cc/hzKyZv2n)

### Search Page

[![screely-1692320222073.png](https://i.postimg.cc/L5qnhDDz/screely-1692320222073.png)](https://postimg.cc/8fS10hq5)

### Detail Page

[![screely-1692320335609.png](https://i.postimg.cc/QCRV77Yv/screely-1692320335609.png)](https://postimg.cc/V0WYQJ8F)

## Features

-   Search for movies by title
-   View details about a movie including title, release date, overview, genres, runtime, rating
-   Responsive design for mobile and desktop

## Added Features

-   View list of popular movies, upcoming movies, now playing movies, top rated movies (Home Page)
-   View List of Similar movies based on movie detail with horizontal scrolling for better UX
-   Horizontal scrolling for movie lists on home page for better browsing experience

## Tech Stack

**Framework:** React, Typescript, Vite

**Data Fetch:** React Query (Tanstack)

**Styling:** TailwindCSS, DaisyUI

## Custom Hook

### useGetMovie

This custom hook is for fetching data from tmdb API,
take 1 argument as additional URL, it resuable function to fetch movie data

### Usage / Example

In this example useGetMovie take argumen from props.category

```typescript
MovieList.tsx

function MovieList({category,titleCategory,}){
    const { data, isLoading } = useGetMovie(category);
....
```

Now we can reuse MovieList component and customize the category by passing it to its props

```typescript
Home.tsx;

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
```

### useDebounce

useDebounce hook is used to debounce a value. It takes in a value and a delay time as arguments.

### Usage / Example

```typescript
function SearchPage() {
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    // useDebounce is custom hooks to delay fetching data, in here use search from state as value
    const debounceSearch = useDebounce(search, 500);
    // Fetch data by query received from search state
    const { data, isLoading } = useQuery({
        //caching the data with this key and use it to render the search result
        queryKey: ["search", debounceSearch],
        queryFn: async () => {
            const response = await axios.get(
                `${baseUrl}/search/movie?query=${search}&api_key=${apiKey}`
            );
            return response.data.results;
        },
    });

