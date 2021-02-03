import { getIcon } from "../urls";

export default function WeatherList({ data }) {
    return (
        <div style={{display: "flex"}}>
            
            { data.weather.map((day, key) =>
                <div key={key} style={{margin: 20}}>
                    <div>{day.name}</div>
                    <div>Temperature: {day.temperature}&deg;C</div>
                    <div>{day.description}</div>
                    <img src={getIcon(day.icon)} alt={day.description}></img>
                </div>
                )
            }
        </div>
    )
}