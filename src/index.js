import { env } from "./config/env.js";
import { bootstrap } from "./api/api.js";

const server = bootstrap();

server.listen(env.SERVER_PORT, 'localhost', () => {
  console.log(`Server running on address: http://localhost:${env.SERVER_PORT}...`);
});

