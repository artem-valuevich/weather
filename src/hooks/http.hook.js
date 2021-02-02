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
        const filteredData = {
            city: serverData.city.name,
            weather: getWeatherData(serverData.list)
        }
        console.log(filteredData);
        setData(filteredData);
    }
    return {load, data, error, loadingState}
}

function getWeatherData(data) {
    const days = data.filter(date => new Date(date.dt * 1000).getHours() === 14)
    const weatherData = days.map((day) => ({
        day: new Date(day.dt*1000).toDateString().split(" ")[0],
        temperature: day.main.temp.toFixed(),
        icon: day.weather[0].icon,
        description: day.weather[0].description
    }));
    return weatherData;
}