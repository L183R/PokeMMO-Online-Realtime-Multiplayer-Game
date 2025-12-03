# Simple realtime platform game build with Phaser.io
**Simple realtime Pokemon game build with Phaser 3, Colyseus.io & Webpack 4.**

![PokeMMO](https://github.com/aaron5670/PokeMMO-Online-Realtime-Multiplayer-Game/blob/master/docs/images/PokeMMO.gif?raw=true)

### Features & ToDo
- [x] Multiple players can join the game
- [x] Maps are can be created/edited with [Tiled Map Editor](https://www.mapeditor.org/)
- [x] Multiple levels/maps
- [ ] Pokémons added
- [ ] Can going inside building (In progress)

### How to install
```
// Clone this repository
$ git clone https://github.com/aaron5670/PokeMMO-Online-Realtime-Multiplayer-Game.git

// Go to the client folder and install all modules
$ cd client && npm install

// Go to the server folder and install all modules
$ cd ../server && npm install

// Start the server
$ node server.js

// Open a new terminal and navigate to the client folder and start the webpack server
$ cd client && npm start
```
After successfully install go to [http://localhost:8080](http://localhost:8080/)

### Play entirely in the browser
- The client now falls back to a solo, browser-only mode when it cannot reach the Colyseus server.
- Force offline play by opening the client with `?offline=true` (e.g. `http://localhost:8080/?offline=true`).
- To host a static build without the game server:
  1. `cd client && npm run build`
  2. `npx http-server dist`
  3. Open `http://localhost:8080` (or the port shown by `http-server`).
