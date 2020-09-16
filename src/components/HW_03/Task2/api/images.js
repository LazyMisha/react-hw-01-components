import axios from "axios";
import key from "../../../../key";

export const search = (query, page) =>
  axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
