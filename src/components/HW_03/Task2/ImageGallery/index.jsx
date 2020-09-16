import React from "react";
import styles from "./styles.module.scss";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ items, handleClickImageItem }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map((item) => (
        <ImageGalleryItem
          key={item.id}
          item={item}
          handleClickImageItem={handleClickImageItem}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
