import { createServer } from "node:http";
import { env } from "./config/env.js";

const server = createServer((_request, response) => {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ message: "ping" }));
});

server.listen(env.SERVER_PORT, 'localhost', () => {
  console.log(`Server running on address: http://localhost:${env.SERVER_PORT}...`);
});

