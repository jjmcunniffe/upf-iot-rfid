import { Socket } from 'net';

import Device from './components/Device.js';
import { getTagId } from './components/tag.js';

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
            const tag = await getTagId(data);

            if (tag !== null) {
                // Temporary.
                console.log("Tag = " + tag);
            }
        })
        .on('end', function() {
            console.log('[REALTIME-SOCKET] Disconnected.');
        })
        .on('error', function(e) {
            throw new Error(e.message);
        });

    socket.connect(device.socketPort, device.address);
} catch (e) {
    throw new Error(`[REALTIME-SOCKET] Error retrieving data: ${e}`);
}