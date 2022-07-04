/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const express = require("express");

const server = express();

const history = require('connect-history-api-fallback');

async function main() {
  server.use("/ready", (req, res) => res.send("ok"));
  server.use(history())

  server.use(express.static('./build'));

  server.listen(process.env.PORT || 5000, (err) => {
    if (err) throw err;
    console.log(`Ready on port ${process.env.PORT} or 5000`);
  });
}

main();
