import express, { Request, Response } from "express";
import { Ticket } from "../models/ticket";
import { NotFoundError } from "@kbhhtickets/common";
const router = express.Router();

router.get("api/tickets", async (req: Request, res: Response) => {
  const tickets = Ticket.find();

  res.send(tickets);
});

export { router as indexTicketRouter };
