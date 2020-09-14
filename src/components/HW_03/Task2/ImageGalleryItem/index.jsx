import React from "react";
import styles from "./styles.module.scss";

const ImageGalleryItem = ({ item }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={item.webformatURL}
        alt=""
        className={styles["ImageGalleryItem-image"]}
      />
    </li>
  );
};

export default ImageGalleryItem;
