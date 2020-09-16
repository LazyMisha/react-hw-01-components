import React from "react";
import styles from "./styles.module.scss";

const ImageGalleryItem = ({ item, handleClickImageItem }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={() => {
          handleClickImageItem(item.largeImageURL);
        }}
        src={item.webformatURL}
        alt=""
        className={styles["ImageGalleryItem-image"]}
      />
    </li>
  );
};

export default ImageGalleryItem;
