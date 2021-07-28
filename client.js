const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  const name = "EN";

  conn.on("close", () => {
    console.log('you ded cuz you idled');
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.write(`Name: ${name}`);

  return conn;
};


module.exports = {connect};