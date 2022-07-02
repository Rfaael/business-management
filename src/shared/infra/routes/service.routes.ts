import { Router } from "express";
import { CreateNewServiceController } from "../../../modules/employee/useCases/CreateNewService/CreateNewServiceController";

const serviceRoutes = Router();

const createNewServiceController = new CreateNewServiceController();

serviceRoutes.post("/", createNewServiceController.handle);

export { serviceRoutes };