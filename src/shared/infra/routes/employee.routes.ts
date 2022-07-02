import { Router } from "express";
import { AddNewEmployeeController } from "../../../modules/company/useCases/AddNewEmployees/AddNewEmployeeController";
import { DeleteEmployeeController } from "../../../modules/company/useCases/DeleteEmployee/DeleteEmployeeController";
import { GetEmployeeController } from "../../../modules/company/useCases/GetEmployeeData/GetEmployeeDataController";
import { UpdateEmployeeProfileController } from "../../../modules/company/useCases/UpdateEmployeeProfile/UpdateEmployeeProfileController";
import { EmployeeLoginController } from "../../../modules/employee/useCases/EmployeeLogin/EmployeeLoginController";
import { employeeAuthentication } from "../../middlewares/loginAuthentication/employeeAuthentication";

const employeeRoutes = Router();

//ADD NEW EMPLOYEE CONTROLLER
const addNewEmployeeController = new AddNewEmployeeController();
//GET ALL EMPLOYEES CONTROLLER
const getAllEmployeesController = new GetEmployeeController();
//DELETE EMPLOYEE BY ID
const deleteEmployeeController = new DeleteEmployeeController();
//UPDATE EMPLOYEE PROFILE 
const updateEmployeeProfileController = new UpdateEmployeeProfileController();
//LOGIN CONTROLLER
const employeeLoginController = new EmployeeLoginController();

employeeRoutes.post("/login", employeeAuthentication, employeeLoginController.handle);

//SO DEVE PODER ADICIONAR NOVOS FUNCIONARIOS QUEM ESTIVER AUTENTICADO
employeeRoutes.post("/", addNewEmployeeController.handle);

employeeRoutes.get("/", getAllEmployeesController.handle);

employeeRoutes.delete("/", deleteEmployeeController.handle);

employeeRoutes.put("/update/profile", updateEmployeeProfileController.handle);



export { employeeRoutes };