import axios from "axios";
import { pixabay_api } from "../../../../key";

export const search = (query, page) =>
  axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${pixabay_api}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
