import React from "react";
import styles from "./styles.module.scss";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map((item) => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
