const env = {
  SERVER_PORT: process.env.SERVER_PORT
};

for (const property in env) {
  if (env[property] === undefined) throw new Error("Missing ENV variables...");
}

export { env };
