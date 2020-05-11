//`https://api.github.com/users/${username}`

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
// module.exports("");
const axios = require("axios");

const api = {
  getUser(username) {
    const URL = `https://api.github.com/users/${username}`;
    return axios.get(URL).catch((err) => {
      console.log(err);
      console.log("Can't find the user name!");
      process.exit();
    });
  },
};
module.exports = api;
