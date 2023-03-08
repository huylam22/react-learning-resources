import axios from "axios";
import React, { useEffect } from "react";
// import lodash from "lodash";
const HackerNewsRemake = () => {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [url, setUrl] = React.useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const handleFetchData = React.useRef({});
  console.log(hits);
  handleFetchData.current = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log(response);
      setTimeout(() => {
        setHits(response.data?.hits || []);
        // setLoading(false);
      }, 3000);
    } catch (error) {
      //   setLoading(false);
      //   setErrorMessage(`The error happend ${error}`);
    }
  };
  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);
  const handleUpdateQuery = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full text-black rounded-md p-5 mb-5 focus:border-blue-400 transition-all"
          placeholder="Type your keywords ..."
          default={query}
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
      <div className="flex flex-wrap gap-5">
        {hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsRemake;
