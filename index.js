const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const { loadMapsAndRooms } = require("./utils.js");
const { startGame } = require("./game.js")

const app = express();
const server = createServer(app);

const PORT = 8080

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io", "http://localhost:3000"],
    credentials: true,
  },
});

const map = {};

io.on("connection", (socket) => {
  loadMapsAndRooms(socket, map, 100000);

  startGame(io,socket, map);
});

instrument(io, {
  auth: false,
  mode: "development",
});
