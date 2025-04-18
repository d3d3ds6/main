import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "6cd9178e895d7ed836f42e9744401070";

//this function uses for movie detail
const fetchData = async (param: any) => {
    const response = await axios.get(
        `${baseUrl}/movie/${param}?api_key=${apiKey}`
    );
    return response.data;
};

export default fetchData;
