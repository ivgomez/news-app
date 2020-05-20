import { apiUrl } from "./config";

export const path = {
  searchByDatePath(date) {
    return `${apiUrl}/latest/${date}`;
  },
  searchByCategoryPath(category) {
    return `${apiUrl}/news/category/${category}`;
  },
  searchByQueryPath(query) {
    return `${apiUrl}/search/${query}`;
  },
};
