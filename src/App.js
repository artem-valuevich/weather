import Button from "./components/Button";
import Input from "./components/Input";
import { useButton } from "./hooks/button.hook";
import { useHttp } from "./hooks/http.hook";
import { useInput } from "./hooks/input.hook";
import { getIcon } from "./urls";

function App() {
  const [input, setInput] = useInput();
  const {load, data, loadingState, error} = useHttp();
  const send = useButton(input, setInput, load);

  if (!data) return (
    <>
      <Input {...input} onKeyPress={send} />
      <Button onClick={send} />
      <div>No weather data yet</div>
    </>
  ) 
  if (loadingState) return <div>Loading: {"Loading"}</div>
  if (error) return (
    <>
      <Input {...input} onKeyPress={send} />
      <Button onClick={send} />
      <div>Failed to load weather data. Look to console to learn more information</div>
    </>
  )
  
  return (
    <>
      <Input {...input} onKeyPress={send} />
      <Button onClick={send} />
      <div>City: {data.name}</div>
      <div>Temperature: {data.main.temp}&deg;C</div>
      <div>{data.weather[0].description}</div>
      <img src={getIcon(data.weather[0].icon)} alt={data.weather[0].description}></img>

    </>
  )
}

export default App;
