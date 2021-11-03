// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  // your code here
  process.stdin.on("data", (key) => {
    process.stdout.write(key);
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      console.log("Move: up");
      connection.write("Move: up");
    }
    if (key === "a") {
      console.log("Move: left");
      connection.write("Move: left");
    }
    if (key === "s") {
      console.log("Move: down");
      connection.write("Move: down");
    }
    if (key === "d") {
      console.log("Move: right");
      connection.write("Move: right");
    }
    if (key === "o") {
      connection.write("Say: sneks and ladders");
    }
  });
};

module.exports = { setupInput };
