import { setupServer } from "msw/node";
import handlers from "./handlers";

// setupServer fails in a browser environment so
// it must be defined in a separate file.
const server = setupServer(...handlers);

export default server;
