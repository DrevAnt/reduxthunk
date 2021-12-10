import axios from "axios";
import apiConfig from "../const/apiConfig";

const api = {
  getMethod(endpoint) {
    return axios.get(apiConfig.baseUrl + endpoint).then((response) => {
      return response.data;
    });
  },
};

export default api;
