import { Router } from "express";
import { CreateNewCostumerPresencialController } from "../../../modules/employee/useCases/CreateNewCostumerPresencial/CreateNewCostumerPresencialController";
import { GetCostumerProfileController } from "../../../modules/employee/useCases/GetCostumerProfile/GetCostumerProfileController";

const costumerRoutes = Router();

const createNewCostumerPresencialController = new CreateNewCostumerPresencialController();
const getCostumerProfileController = new GetCostumerProfileController();

costumerRoutes.post("/create/presencial", createNewCostumerPresencialController.handle);
costumerRoutes.get("/", getCostumerProfileController.handle);


export { costumerRoutes };
