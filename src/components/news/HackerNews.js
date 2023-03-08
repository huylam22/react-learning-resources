import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import lodash, { debounce } from "lodash";

// debounce cach 1 dung lodash library

// Cach 2: Debouncing
const useDebounceValue = (value, time = 250) => {
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

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // Set query (input) user nhap thanh debounce query de lay user input sau 1 tg nhat dinh
  const debounceQuery = useDebounceValue(query); // Cach 2
  // const handleFetchData = useRef({});

  /// CACH 1:
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);

  //**** Cach 2: Debouncing technique dung setTimeout (remember cleanup function de clear setTimeout) */
  // **** FIX LOI VALUE KO LAY DC (Thay vi setDefaultValue trong input)
  const getQueryResults = (query) =>
    axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
      // `https://hn.algolia.com/api/v1/search?query=${query}`
    );
  //https://hn.algolia.com/api/v1/search?query=react

  const handleFetchData = useRef(null);
  handleFetchData.current = async () => {
    setLoading(true);
    // debugger;
    try {
      const response = await getQueryResults(debounceQuery); // Cach 1: truyen query thang

      // response.data?.hits == if (res.data) {
      //   setHits(response.data.hits)
      // }

      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrorMessage(`Not found 404 ${err}`);
    }
  };

  const handleUpdateQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    // (async () => {
    //   setLoading(true);
    //   // debugger;
    //   try {
    //     const response = await getQueryResults(debounceQuery);
    //     // console.log(response.data.hits);
    //     // response.data?.hits == if (res.data) {
    //     //   setHits(response.data.hits)
    //     // }
    //     // console.log(debounceQuery);
    //     setHits(response.data?.hits || []);
    //     setLoading(false);
    //   } catch (err) {
    //     console.log("here");
    //     console.log(err);
    //     setLoading(false);
    //     setErrorMessage(`Not found 404 ${err}`);
    //   }
    // })();

    // *** KHONG BAO LOI DEPENDICIES QUERY DUNG CAI TREN

    handleFetchData.current();
  }, [debounceQuery]);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 block w-full text-black rounded-md p-5 mb-5 focus:border-blue-400 transition-all"
        placeholder="Type your keywords ..."
        value={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="mx-auto MY-10 w-8 h-8 loading rounded-full border-blue-500 border-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      <div className="flex flex-wrap flex-col gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 key={index} className="p-3 bg-gray-100 rounded-md">
              {" "}
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
