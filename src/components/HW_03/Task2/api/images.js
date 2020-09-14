import axios from "axios";

export const search = (query, page) =>
  axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=18307166-3b43ffbdc74cd0b79f1194416&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
