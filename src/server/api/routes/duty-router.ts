import { Request, Response, Router } from "express";
import * as dutyController from "../controllers/duty/duty-controller";
import { CreateDutyDto, UpdateDutyDto } from "../dto/duty.dto";

const dutyRouter = Router();

dutyRouter.get("/", async (req: Request, res: Response) => {
  const result = await dutyController.getAll();
  return res.status(200).json(result);
});

dutyRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await dutyController.getById(id);
  return res.status(200).json(result);
});

dutyRouter.post("/", async (req: Request, res: Response) => {
  const payload: CreateDutyDto = req.body;

  const result = await dutyController.create(payload);
  return res.status(201).send(result);
});

dutyRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload: UpdateDutyDto = req.body;

  const result = await dutyController.update(id, payload);
  return res.status(200).send(result);
});

dutyRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await dutyController.deleteById(id);
  return res.status(200).json(result);
});

export default dutyRouter;
