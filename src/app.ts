import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { indexTicketRouter } from "./routes";
import { updateTicketRouter } from "./routes/update";

import { errorHandler, NotFoundError, currentUser } from "@kbhhtickets/common";
const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUser);
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(updateTicketRouter);
app.use(indexTicketRouter);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
