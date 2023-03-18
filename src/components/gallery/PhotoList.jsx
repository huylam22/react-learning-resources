import React from "react";
import { useGallery } from "../../context/galleryContext";
import PropTypes from "prop-types";
import PhotoItem from "./PhotoItem";

const PhotoList = () => {
  const { photos } = useGallery();

  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-4 gap-5 mt-20">
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

export default PhotoList;
