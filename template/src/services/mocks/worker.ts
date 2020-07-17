import { setupWorker } from "msw";
import handlers from "./handlers";

// setupWorker fails in a node environment so
// it must be defined in a separate file.
export const worker = setupWorker(...handlers);

export default worker;
