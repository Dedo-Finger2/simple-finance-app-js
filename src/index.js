import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { env } from "./config/env.js";

const server = http.createServer((_request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(fs.readFileSync(path.join("./", "src", "views", "index.html"), "utf8"));
});

server.listen(env.SERVER_PORT, 'localhost', () => {
  console.log(`Server running on address: http://localhost:${env.SERVER_PORT}...`);
});

