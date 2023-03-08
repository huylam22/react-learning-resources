import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      // unmounted component
      isMounted.current = false;
    };
  }, []);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    // debugger;
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (err) {
      console.log("here");
      console.log(err);
      setLoading(false);
      setErrorMessage(`Not found 404 ${err}`);
    }
  };

  // *** ON SUBMIT FEATURE
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
