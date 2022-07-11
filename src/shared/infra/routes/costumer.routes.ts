import { Router } from "express";
import { CreateNewCostumerController } from "../../../modules/employee/useCases/CreateNewCostumer/CreateNewCostumerController";
import { GetCostumerProfileController } from "../../../modules/employee/useCases/GetCostumerProfile/GetCostumerProfileController";

const costumerRoutes = Router();

const createNewCostumerController = new CreateNewCostumerController();
const getCostumerProfileController = new GetCostumerProfileController();

costumerRoutes.post("/", createNewCostumerController.handle);
costumerRoutes.get("/", getCostumerProfileController.handle);


export { costumerRoutes };
