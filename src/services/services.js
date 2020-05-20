import { path } from "../const/paths";

const urlBase = async (path) => {
  const news = await fetch(path);
  return news.json();
};

export const searchByDate = async (date) =>
  await urlBase(path.searchByDatePath(date));

export const searchByCategory = async (category) =>
  await urlBase(path.searchByCategoryPath(category));

export const searchByQuery = async (query) =>
  await urlBase(path.searchByQueryPath(query));
