import { getIcon } from "../urls";

export default function WeatherList({ data }) {
    return (
        <div className="flex-container space-between">
            
            { data.weather.forecast.map((day, key) =>
                <div key={key} className="column">
                    <div>{day.name}</div>
                    <img src={getIcon(day.icon)} alt={day.description}></img>
                    <div>{day.temperature}&deg;C</div>
                </div>
                )
            }
        </div>
    )
}