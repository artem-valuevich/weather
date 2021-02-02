import { useState } from "react";
import { getWeather } from "../urls";

export function useHttp() {
    const [data, setData] = useState(null);
    const [loadingState, setloadingState] = useState(false);
    const [error, setError] = useState(null);

    async function load(city) {
        setloadingState(true);
        setError(null);
        const response = await fetch(getWeather(city));
        setloadingState(false);

        if(!response.ok) {
            setError({status: response.status, message: response.statusText})
            return;
        }

        const serverData = await response.json();
        
        setData(serverData);
    }
    return {load, data, error, loadingState}
}