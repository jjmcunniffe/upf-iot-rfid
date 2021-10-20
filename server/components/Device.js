import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export default class Device {
    address;
    id;
    port;
    protocol;
    socketPort;
    url;
    socketUrl;

    constructor() {
        this.address = process.env.SERVER_ADDRESS || "localhost";
        this.id = process.env.DEVICE_ID || "simulator";
        this.port = process.env.SERVER_PORT || 3161;
        this.protocol = process.env.PROTOCOL || "http";
        this.socketPort = process.env.SOCKET_PORT || 3177;

        // Assemble the url.
        this.url = `${this.protocol}://${this.address}:${this.port}/devices/${this.id}`;
    }

    get address () {
        return this.socketPort;
    }

    get socketPort() {
        return this.socketPort;
    }

    async isRunning() {
        // Request the status of the device.
        let response;

        console.log("[DEVICE] Checking status...");
        try {
            response = await fetch(this.url);
        }
        catch(e) {
            throw new Error(`[DEVICE] Error while retrieving status: ${e}`);
        }

        // Parse status as XML and extract the <status> tag.
        const statusRaw = await response.text();
        let status = await parseStringPromise(statusRaw);
        status = status.response.data[0].devices[0].device[0].status[0];

        if (status == "RUNNING") {
            return true;
        } else {
            return false;
        }
    }

    async start() {
        // Check if the device is running before attempting start.
        try {
            const running = await this.isRunning();
            if (running) {
                console.log("[DEVICE] Already running.");
            } else {
                console.log("[DEVICE] Not running. Starting...");

                // Send a request to start the device.
                await fetch(`${this.url}/start`);
                
                // Check if the device has started.
                const started = await this.isRunning();
                if (started) {
                    console.log("[DEVICE] Successfully started.");
                    return true;
                }
                throw new Error("Unknown Error.");
            }
        } catch(e) {
            throw new Error(`[DEVICE] Error when starting device: ${e}`);
        }
    }

}