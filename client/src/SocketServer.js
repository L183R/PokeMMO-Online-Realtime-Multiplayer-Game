import * as Colyseus from "colyseus.js";

/*================================================
| Array with current online players
*/
let onlinePlayers = [];

/*================================================
| Local offline fallback room
*/
class LocalRoom {
    constructor() {
        this.sessionId = "offline-player";
        this.listeners = [];
        console.info("Running in browser-only mode. Multiplayer features are disabled.");
    }

    onMessage(cb) {
        this.listeners.push(cb);
        // Immediately report that there are no other players connected.
        cb({event: "CURRENT_PLAYERS", players: {}});
    }

    send(event, payload) {
        console.debug(`[LocalRoom] Ignoring ${event}`, payload);
    }
}

/*================================================
| Colyseus connection with server (with offline fallback)
*/
const wsUrl = process.env.COLYSEUS_ENDPOINT || "ws://localhost:3000";
const forceOffline = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("offline") === "true";

const client = !forceOffline ? new Colyseus.Client(wsUrl) : null;
let room = client && !forceOffline ? client.joinOrCreate("poke_world").then(room => {
    console.log(room.sessionId, "joined", room.name);
    return room;
}).catch(e => {
    console.warn("JOIN ERROR. Falling back to offline mode.", e);
    return new LocalRoom();
}) : Promise.resolve(new LocalRoom());

export {onlinePlayers, room};
