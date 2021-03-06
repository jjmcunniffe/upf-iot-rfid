import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Socket } from 'net';

import Device from './components/Device.js';
import { getTagId } from './components/tag.js';

import database from './database.js'

// Route using a basic HTTP server.
const app = express();
const server = http.createServer(app);

app.get('/', ({res}) => {
    res.json({message: "Welcome to the backend!"});
});

// Expose the public folder for images.
app.use(express.static('public'));

// Create a websocket for communication with client.
const io = new Server(server, {
    cors: {
      origin: "*",
    }
});

// Communicate with Advannet.
try {
    // Start the device before starting realtime.
    const device = new Device();
    await device.start();

    // Handle connection to the Advannet realtime socket.
    const socket = new Socket();

    socket
        .on('connect', function() {
            console.log('[REALTIME-SOCKET] Connected.');
        })
        .on('data', async function(chunk) {
            let data = chunk.toString(); // Chunk is a buffer.
            let product = {};

            const tag = await getTagId(data);
            if (tag !== null) {
                // Send the product.
                product = database[tag];
                io.emit("TagFound", product);
            }
        })
        .on('end', function() {
            console.log('[REALTIME-SOCKET] Disconnected.');
        })
        .on('error', function(e) {
            throw new Error(`[REALTIME-SOCKET] Could not retrieve data: ${e.message}`);
        });

    socket.connect(device.socketPort, device.address);
} catch (e) {
    throw e;
}

// Run the http server on the correct port.
const port = process.env.SERVER_PORT || 3001;
server.listen(port, () => {
    console.log(`[SERVER] Running on *:${port}`);
});