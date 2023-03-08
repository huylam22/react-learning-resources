import React from "react";

const YouTubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img
          src={props.image}
          alt=""
          className="youtube-cover"
          // style={{
          //   display: "block",
          //   maxWidth: "100%",
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          // }}
        />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}{" "}
            {/* If title == empty show the other instead */}
          </h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default YouTubeItem;
