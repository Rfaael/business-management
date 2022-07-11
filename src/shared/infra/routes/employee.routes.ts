import { Router } from "express";
import { AddNewEmployeeController } from "../../../modules/company/useCases/AddNewEmployees/AddNewEmployeeController";
import { DeleteEmployeeController } from "../../../modules/company/useCases/DeleteEmployee/DeleteEmployeeController";
import { FindEmployeeByIdController } from "../../../modules/company/useCases/FindEmployeeById/FindEmployeeByIdController";
import { UpdateEmployeeProfileController } from "../../../modules/company/useCases/UpdateEmployeeProfile/UpdateEmployeeProfileController";
import { EmployeeLoginController } from "../../../modules/employee/useCases/EmployeeLogin/EmployeeLoginController";
import { employeeLoginAuthentication } from "../../middlewares/loginAuthentication/employeeLoginAuthentication";

const employeeRoutes = Router();

//ADD NEW EMPLOYEE CONTROLLER
const addNewEmployeeController = new AddNewEmployeeController();

//GET EMPLOYEE BY ID CONTROLLER
const findEmployeeByIdController = new FindEmployeeByIdController();

//DELETE EMPLOYEE BY ID
const deleteEmployeeController = new DeleteEmployeeController();

//UPDATE EMPLOYEE PROFILE 
const updateEmployeeProfileController = new UpdateEmployeeProfileController();

//LOGIN CONTROLLER
const employeeLoginController = new EmployeeLoginController();

employeeRoutes.post("/login", employeeLoginAuthentication, employeeLoginController.handle);

//SO DEVE PODER ADICIONAR NOVOS FUNCIONARIOS QUEM ESTIVER AUTENTICADO
employeeRoutes.post("/", addNewEmployeeController.handle);

employeeRoutes.get("/", findEmployeeByIdController.handle);

employeeRoutes.delete("/", deleteEmployeeController.handle);

employeeRoutes.put("/update/profile", updateEmployeeProfileController.handle);



export { employeeRoutes };