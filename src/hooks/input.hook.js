import {useState} from "react"

export function useInput() {
    const [input, setInput] = useState("");
    const onChange = (event) => {
      setInput(event.target.value);
    };
    
    return [{ value: input, onChange }, setInput];
  }