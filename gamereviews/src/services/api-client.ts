import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "ab7c155661a4441eb269217799448b1d",
  },
});
