import fs from "node:fs";
import path from "node:path";

export function home(_request, response) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(fs.readFileSync(path.join("./", "src", "views", "index.html"), "utf8"));
}
