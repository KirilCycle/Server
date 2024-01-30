function loadMapsAndRooms  (socket,maps, number) {
  for (let i = 0; i <= number; i++) {
    maps[i] = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    socket.join("quertySelector@334q34q23q23GarbageXSexCollector" + i);
  }
  
};


module.exports = {loadMapsAndRooms}

