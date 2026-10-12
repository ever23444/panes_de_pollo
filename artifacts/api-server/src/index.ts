import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"] ?? "3000";
const requestedPort = Number(rawPort);

if (Number.isNaN(requestedPort) || requestedPort <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const tryListen = (port: number) => {
  const server = app.listen(port, () => {
    logger.info({ port }, "Server listening");
  });

  server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      const fallbackPort = port + 1;
      logger.warn(
        { port, fallbackPort },
        "Port already in use, retrying with next available port",
      );
      tryListen(fallbackPort);
      return;
    }

    logger.error({ err }, "Error listening on port");
    process.exit(1);
  });
};

tryListen(requestedPort);
