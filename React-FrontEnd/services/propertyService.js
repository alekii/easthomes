import httpRequest from "./httpService";
import config from "../config.json";
let results = [];
//let isLoaded = false
export function getProperties(pageNumber) {
  return httpRequest.get(`${config.apiEndPoint}?page=${pageNumber}`);
}

export function getProperty(id) {
  return httpRequest.get(`${config.apiEndPoint}${id}/`);
}

export async function searchProperty(searchterm) {
  const location = searchterm.town;
  const minprice = searchterm.minprice;
  const maxprice = searchterm.maxprice;
  const bedrooms = searchterm.bedrooms;
  results = await httpRequest.get(
    `${config.apiEndPoint}?location=${location}&min_price=${minprice}&max_price=${maxprice}&bedrooms=${bedrooms}`
  );
  return results;
}

export function searchResults() {
  console.log(results);
  return results;
}
