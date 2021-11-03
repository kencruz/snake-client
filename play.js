const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "", // IP address here,
    port: "50541", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
    console.log("connected");
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

console.log("Connecting ...");
connect();
