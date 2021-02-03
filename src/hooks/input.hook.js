import {useState} from "react"

export function useInput(loader) {
    const [input, setInput] = useState("");

    const onKeyPress = event => {
      if (event.key !== "Enter") return;
      if (!input) return;
  
      event.preventDefault();
  
      loader(input.trim())
      setInput("");
      };

    const onChange = event => {
      setInput(event.target.value);
    };
    
    
    return { value: input, onChange, onKeyPress };
  }