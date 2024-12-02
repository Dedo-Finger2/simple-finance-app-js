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

  response.end(body);
  console.log(body);
}
