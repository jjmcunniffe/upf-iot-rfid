# upf-iot-rfid
IoT project using RFID for Universitat Pompeu Fabra (UPF)
By Jonathan Cunniffe and Pol Garcia

# Setting Up.
In order to run this project, you must complete the following steps:
1. Run `npm install` on in both the client and server directory.
2. Start the simulator using `./simulator/bin/AdvanNet.sh` or connect to a physical AdvanNet reader by creating a `.env` file in the server directory with the following environment variables:
    DEVICE_ADDRESS=YOUR DEVICE IP ADDRESS
    DEVICE_ID=YOUR DEVICE ID (RETRIEVED FROM ADVANNET ADMIN OR GET REQUEST).
3. Start the server with `npm start` from within its directory.
4. Start the client with either `npm start` or `yarn start` from within the client directory.
5. View the client in your browser on port 3000. View the server on port 3001.

# Using the application.
When on the client webpage, any tag retrieved from the device/simulator will have its corresponding product returned by the server. These updates will happen in realtime.
