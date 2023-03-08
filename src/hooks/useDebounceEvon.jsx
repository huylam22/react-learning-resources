import { useEffect, useState } from "react";

export default function useDebounceEvon(initialValue = "", delay = 500) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [initialValue, delay]);
  return debounceValue;
}
