import axios from "axios";
import getConfig from "next/config";

module.exports = {
  axios: () =>
    axios.create({
      baseURL: `https://jsonplaceholder.typicode.com/todos/1`,
    }),
};
