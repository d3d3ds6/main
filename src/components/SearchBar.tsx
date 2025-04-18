import { useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

type Search = {
    handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    terms?: string;
    home?: boolean;
};

function SearchBar({ handleSearch, terms, home }: Search) {
    const navigate = useNavigate();
    return (
        <div
            className="relative max-w-xl w-full cursor-pointer"
            onClick={() => home && navigate("/search-movie")}
        >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 z-50 text-xl">
                <LuSearch />
            </span>
            <input
                type="search"
                placeholder="Search Movies . . ."
                className="text-lg font-medium indent-6 input-accent border-none input w-full input-md md:max-w-xl rounded-full bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
                onChange={handleSearch}
                value={terms}
            />
        </div>
    );
}

export default SearchBar;
