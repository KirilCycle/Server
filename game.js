

function startGame(io,socket, map) {
  socket.on("join-game", (gameId) => {
    if (gameId) {
      socket.join(gameId);
      if (!map[gameId]) {
        map[gameId] = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
      }
    }
  });

  socket.on("position", (position, gameId) => {
    if (position && gameId) {

      const x = position["x"];
      const y = position["y"];

      map[gameId][y][x] = "x";

      io.to(gameId).emit("position", position, map[gameId]);
    } else {
      console.log("no room id no game id");
    }
  });
}

module.exports = {startGame}