import React from "react";
import ImageCard from "./ImageCard";

const Images = (props) => {
  const searchImages = props.images.map( (image) => {
    return (
      <ImageCard key={image.id} image={image}  />
    );
  });

  return <div className="image-list">{searchImages}</div>;
};

export default Images;
