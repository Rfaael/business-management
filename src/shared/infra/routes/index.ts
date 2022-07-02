import { Router } from "express";
import { AddNewEmployeeController } from "../../../modules/company/useCases/AddNewEmployees/AddNewEmployeeController";
import { companyRoutes } from "./company.routes";
import { costumerRoutes } from "./costumer.routes";
import { employeeRoutes } from "./employee.routes";
import { serviceRoutes } from "./service.routes";

const allRoutes = Router();

//COMPANY ROUTES
allRoutes.use("/company", companyRoutes);
//EMPLOYEE ROUTES 
allRoutes.use("/employee", employeeRoutes);
//COSTUMER ROUTES
allRoutes.use("/costumer", costumerRoutes);
//SERVICES ROUTES
allRoutes.use("/service", serviceRoutes);

export { allRoutes };