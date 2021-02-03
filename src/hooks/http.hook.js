import { useState } from "react";
import { getWeather } from "../urls";

export function useHttp() {
    const [data, setData] = useState(null);
    const [loadingState, setloadingState] = useState(false);
    const [error, setError] = useState(null);

    async function load(city) {
        setloadingState(true);
        setError(null);
        try {
            const response = await fetch(getWeather(city));
            setloadingState(false);

            if (!response.ok) {
                setError({ status: response.status, message: response.statusText })
                console.log(error)
                return;
            }

            const serverData = await response.json();
            const filteredData = {
                city: serverData.city.name,
                weather: getWeatherData(serverData.list)
            }
            setData(filteredData);
        } catch (e) {
            setloadingState(false);
            console.log("Connection error");
            console.log(e);
            setError(e);
        }
    }
    return { load, data, error, loadingState }
}

function getWeatherData(data) {
    const days = data.filter(date => {
        const hour = new Date(date.dt * 1000).getHours();
        return (hour === 14 || hour === 15)
    });
    
    const current = {
        name: new Date(days[0].dt * 1000).toDateString().split(" ")[0],
        temperature: days[0].main.temp.toFixed(),
        icon: days[0].weather[0].icon,
        description: days[0].weather[0].description
    }

    const forecast = days.map((day) => ({
        name: new Date(day.dt * 1000).toDateString().split(" ")[0],
        temperature: day.main.temp.toFixed(),
        icon: day.weather[0].icon,
        description: day.weather[0].description
    }));
    return {forecast, current};
}