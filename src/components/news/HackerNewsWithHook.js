// import axios from "axios";
import React, { useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
// import lodash, { debounce } from "lodash";

// debounce cach 1 dung lodash library

const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");

  const { loading, errorMessage, setUrl, data } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
  console.log(data);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full text-black rounded-md p-5 focus:border-blue-400 transition-all"
          placeholder="Type your keywords ..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
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
          data.hits.length > 0 &&
          data.hits.map((item, index) => {
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

export default HackerNewsWithHook;
