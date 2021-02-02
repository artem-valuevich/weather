export function useButton(input, setInput, loader) {
    return event => {

    if (event.key !== "Enter" && event.key !== undefined) return
    if (!input.value) return

    event.preventDefault();

    loader(input.value.trim())
    setInput("");
    };
  }