const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    return axios.get(queryUrl).catch((err) => {
      console.log("Cant find user");
      process.exit(1);
    });
  },
};
module.exports = api;
