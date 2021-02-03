import Input from "./components/Input";
import WeatherList from "./components/WeatherList";
import { useHttp } from "./hooks/http.hook";
import { useInput } from "./hooks/input.hook";
import { getIcon } from "./urls";
import "./index.css";

function App() {
  const { load, data, loadingState, error } = useHttp();
  const input = useInput(load);

  if (loadingState) return (
    <>
      <Input {...input} disabled={loadingState} />
      <div>Loading</div>
    </>
  )

  if (error) return (
    <>
      <Input {...input} />
      {/* <Button onClick={send} /> */}
      <div>Failed to load weather data. Look to console to learn more information</div>
    </>
  )

  if (!data) return (
    <>
      <Input {...input} />
      {/* <Button onClick={send} /> */}
      <div>No weather data yet</div>
    </>
  )

  return (
    <>
      <Input {...input} />
      <div className="flex-container space-between">
        
        <div className="column">
          <div style={{fontSize: "1.5em"}}>{data.city.toUpperCase()}</div>
          <div>WEATHER</div>
        </div>

        <img src={getIcon(data.weather.current.icon)} alt={data.weather.current.description}/>

        <div className="column">
          <div style={{fontSize: "2em"}}>{data.weather.current.temperature}&deg;C</div>
          <div>{data.weather.current.description}</div>
        </div>

      </div>

      <WeatherList data={data} />

    </>
  )
}

export default App;
