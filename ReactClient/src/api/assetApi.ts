import { Asset } from "../redux/types/asset";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL + "/api/Asset";

export function getAssets(): Promise<Array<Asset>> {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
