import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import lodash, { debounce } from "lodash";

// debounce cach 1 dung lodash library

const getQueryResults = (query) =>
  axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);

const HackerNewsEvon = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

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
    // console.log(isMounted.current);
    // debugger;
    try {
      const response = await getQueryResults(query); // Cach 1: truyen query thang
      setTimeout(() => {
        if (isMounted.current) {
          setHits(response.data?.hits || []);
          setLoading(false);
        }
      }, 1000);
      // console.log(response.data.hits);
      // response.data?.hits == if (res.data) {
      //   setHits(response.data.hits)
      // }
    } catch (err) {
      console.log("here");
      console.log(err);
      setLoading(false);
      setErrorMessage(`Not found 404 ${err}`);
    }
  };

  //   useEffect(() => {
  //     handleFetchData.current();
  //   }, [query]);

  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);

  // *** ON SUBMIT FEATURE
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  const handleUpdateQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full text-black rounded-md p-5 focus:border-blue-400 transition-all"
          placeholder="Type your keywords ..."
          defaultValue={query}
          onChange={handleUpdateQuery}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
        >
          {" "}
          Fetching
        </button>
      </div>
      {loading && (
        <div className="mx-auto MY-10 w-8 h-8 loading rounded-full border-blue-500 border-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;

            return (
              <h3 key={index} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsEvon;
