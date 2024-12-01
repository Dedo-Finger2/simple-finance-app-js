import http from "node:http";
import { home } from "./routes/home.route.js";

export function bootstrap() {
  const server = http.createServer((_request, response) => {
    home(_request, response);
  });

  return server;
}

