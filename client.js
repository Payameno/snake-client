const net = require('net');

const connect = function () {

  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding('utf-8');

  conn.on("connect", () => {
    console.log("The connection to the game server is established!");
  });

// const moveUp = function() {
//   conn.write("Move: up");
//   conn.write("Name: Bad");
// };

// const moveDown = function() {
//   conn.write("Move: down");
//   conn.write("Name: Bad");
// };

// const moveRight = function() {
//   conn.write("Move: right");
//   conn.write("Name: Bad");
// };

// const moveLeft = function() {
//   conn.write("Move: left");
//   conn.write("Name: Bad");
// };

//   setInterval(moveUp, 1000);
//   setTimeout(moveDown, 3000)
//  setInterval(moveLeft, 2000)
//  setTimeout(moveRight, 4000)
 

  conn.on("data", (data) => {

    console.log(data);

  });

  return conn;

};

console.log('connecting...');
connect();

module.exports = connect;