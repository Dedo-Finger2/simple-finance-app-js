import http from "node:http";
import { home } from "./routes/home.route.js";
import * as router from "./router.js";
import { registerValue } from "./routes/register-value.route.js";

export function bootstrap() {
  const server = http.createServer((request, response) => {
    router.get("/", home);
    router.post("/", registerValue);

    router.handle(request, response);
  });

  return server;
}

