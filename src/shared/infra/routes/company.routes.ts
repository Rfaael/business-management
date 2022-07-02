import { Router } from "express";
import { CompanyLoginController } from "../../../modules/company/useCases/CompanyLogin/CompanyLoginController";
import { CreateCompanyController } from "../../../modules/company/useCases/CreateCompany/CreateCompanyController";
import { GetCompanyDataController } from "../../../modules/company/useCases/GetCompanyData/GetCompanyDataController";
import { jwtAuthentication } from "../../middlewares/jwtAuthentication.ts/jwtAuthentication";
import { CompanyAuthentication } from "../../middlewares/loginAuthentication/companyAuthentication";

const companyRoutes = Router();


//CREATE COMPANY CONTROLLER
const createCompanyController = new CreateCompanyController();
//GET COMPANY DATA 
const getCompanyDataController = new GetCompanyDataController();
//COMPANY LOGIN
const companyLoginController = new CompanyLoginController();

companyRoutes.post("/login", CompanyAuthentication, companyLoginController.handle);
companyRoutes.post("/", createCompanyController.handle);
companyRoutes.get("/", jwtAuthentication, getCompanyDataController.handle);

export { companyRoutes };