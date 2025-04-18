import { useState, useEffect } from "react";

//useDebounce hook is used to debounce a value. It takes in a value and a delay time as arguments.
export default function useDebounce(value: string, delay: number) {
    const [debounceValue, setDebounceValue] = useState(value);

    //it sets up a timeout that updates debounceValue to the latest value after the specified delay.
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            //This timeout is cleared when the component unmounts via the cleanup function.
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debounceValue;
}
