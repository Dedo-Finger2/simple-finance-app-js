/**
 * @typedef { Object } Route
 * @property { string } uri
 * @property { "GET" | "POST" | "PUT" | "PATCH" | "DELETE" } method
 * @property { Function } handler
 */

/** @type { Array<Route> } */
export const routes = [];

export function get(uri, handler) {
  routes.push({ uri, handler, method: "GET" });
}

export function post(uri, handler) {
  routes.push({ uri, handler, method: "POST" });
}

export function handle(request, response) {
  for (const route of routes) {
    if (request.url === route.uri && request.method === route.method) return route.handler(request, response);
  }

  response.writeHeader(404, { "content-type": "application/json" });
  response.end(JSON.stringify({ message: "Not Found." }));
  return;
}
