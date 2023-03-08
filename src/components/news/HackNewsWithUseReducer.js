import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_HITS": {
      // const newState = JSON.parse(JSON.stringify(state))
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_ERROR_MESSAGE": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_URL": {
      return {
        ...state,
        url: action.payload,
      };
    }
    default:
      console.log("err");
      break;
  }
  return state;
};

const HackNewsWithUseReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await axios.get(state.url);
      //   console.log(response.data.hits);
      dispatch({ type: "SET_HITS", payload: response.data?.hits || [] });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ERROR_MESSAGE", payload: `The error is ${err}` });
      console.log(err);
    }
  };

  const handleUpdateQuery = (e) => {
    dispatch({ type: "SET_QUERY", payload: e.target.value });
  };

  useEffect(() => {
    handleFetchData.current();
    // console.log(state.url);
  }, [state.url]);

  // Enter submit feature
  const inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        // Enter key was pressed, trigger the fetch function
        dispatch({
          type: "SET_URL",
          payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
        });

        handleFetchData.current();
      }
    };

    inputRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      inputRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, [state.query]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full text-black rounded-md p-5 focus:border-blue-400 transition-all"
          placeholder="Type your keywords ..."
          value={state.query}
          onChange={handleUpdateQuery}
          ref={inputRef}
        />

        <button
          onClick={() => {
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
          disabled={state.loading}
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0 disabled:bg-blue-200 transition-all"
        >
          {" "}
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="mx-auto MY-10 w-8 h-8 loading rounded-full border-blue-500 border-4 border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackNewsWithUseReducer;
