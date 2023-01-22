import { Request, Response, Router } from "express";
import * as dutyController from "../controllers/duty-controller";
import { CreateDutyDto, UpdateDutyDto } from "../dto/duty.dto";

const dutyRouter = Router();

dutyRouter.get("/", async (req: Request, res: Response) => {
  const result = await dutyController.getAll();

  return res.status(200).json(result.getValue());
});

dutyRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await dutyController.getById(id);

  if (result.isSuccess) {
    return res.status(200).json(result.getValue());
  } else {
    return res.status(404).json(result.error);
  }
});

dutyRouter.post("/", async (req: Request, res: Response) => {
  const payload: CreateDutyDto = req.body;
  const result = await dutyController.create(payload);

  return res.status(201).json(result.getValue());
});

dutyRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload: UpdateDutyDto = req.body;
  const result = await dutyController.update(id, payload);

  if (result.isSuccess) {
    return res.status(200).json(result.getValue());
  } else {
    return res.status(404).json(result.error);
  }
});

dutyRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await dutyController.deleteById(id);

  if (result.isSuccess) {
    return res.status(200).json(result.getValue());
  } else {
    return res.status(404).json(result.error);
  }
});

export default dutyRouter;
