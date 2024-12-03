import fs from "node:fs";
import path from "node:path";
import { IncomingMessage, ServerResponse } from "http";

/**
 * @param { IncomingMessage } request 
 * @param { ServerResponse } response 
 */
export function registerValue(request, response) {
  let body = '';

  request.on('data', chunk => {
    body += chunk.toString();
  });

  request.on('end', () => {
    const data = JSON.parse(body);
    console.log(data);
  });

  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(fs.readFileSync(path.join("./", "src", "views", "index.html"), "utf8"));
}
