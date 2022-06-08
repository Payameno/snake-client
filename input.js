let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  };

  console.log("In in handleuserInput");
  console.log(key);
  if (key === "w") {
  };

  if (key === "a") {
    connection.write("Move: left");
  };

  if (key === "d") {
    connection.write("Move: right");
  };

  if (key === "s") {
    connection.write("Move: down");
  };

};

module.exports = {
  setupInput,
};