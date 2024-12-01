import http from "node:http";
import fs from "node:fs";
import path from "node:path";

export function bootstrap() {
  const server = http.createServer((_request, response) => {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(fs.readFileSync(path.join("./", "src", "views", "index.html"), "utf8"));
  });

  return server;
}

