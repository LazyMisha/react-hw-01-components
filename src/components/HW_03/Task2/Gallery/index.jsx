import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";
import { search } from "../api/images";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (text) => {
    setIsLoading(true);
    setQuery(text);
    setPage(1);
    search(text, page)
      .then((data) => setItems(data.hits))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleFilterChange("kyiv");
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setPage(page + 1);
    search(query, page + 1)
      .then((data) => setItems([...items, ...data.hits]))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.Gallery}>
      <Searchbar onSubmit={handleFilterChange} />
      {isLoading ? <Loader /> : <ImageGallery items={items} />}
      <Button onClick={handleLoadMore} />
    </div>
  );
};

export default Gallery;
