const { connect } = require("./client");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up'); 
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    }
    
    if (key === '1') {
      connection.write('Say: Hello');
    } else if (key === '2') {
      connection.write('Say: Bye')
    }
  }

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};