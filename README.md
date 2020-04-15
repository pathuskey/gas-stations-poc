# Gas Station POC

## Getting Started

These instructions assume that Docker is installed on the system.

1. Start the web server.

   ```bash
   cd server
   docker build -t <username>/gas-station-server .
   docker run -it -p 8080:8080 <username>/gas-station-server
   ```

2. Start the client app.

   ```bash
   cd client
   docker build -t <username>/gas-station-client .
   docker run -it -p 3000:3000 <username>/gas-station-client
   ```

3. Open a browser and navigate to [http://localhost:3000](http://localhost:3000).
