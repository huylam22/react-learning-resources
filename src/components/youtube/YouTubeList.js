import React from "react";
import { YoutubeData } from "../../data";
import YouTubeItem from "./YouTubeItem";

const YouTubeList = (props) => {
  //   console.log(props);
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        const newClass = index === 2 ? "abc" : "";
        return (
          <YouTubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={newClass}
          >
            {" "}
          </YouTubeItem>
        );
      })}
      {props.children}
    </div>
  );
};

export default YouTubeList;
