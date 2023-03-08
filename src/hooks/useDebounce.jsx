import { useEffect, useState } from "react";

export default function useDebounce() {
  const useDebounceValue = (value, time = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebounceValue(value);
      }, time);
      return () => {
        clearTimeout(timeout);
      };
    }, [value, time]);
    return debounceValue;
  };
  return {
    useDebounceValue,
  };
}
