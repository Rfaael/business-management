import { Router } from "express";
import { CompanyLoginController } from "../../../modules/company/useCases/CompanyLogin/CompanyLoginController";
import { CreateCompanyController } from "../../../modules/company/useCases/CreateCompany/CreateCompanyController";
import { CreateNewPositionController } from "../../../modules/company/useCases/CreateNewPosition/CreateNewPositionController";
import { GetCompanyDataController } from "../../../modules/company/useCases/GetCompanyData/GetCompanyDataController";
import { jwtAuthentication } from "../../middlewares/jwtAuthentication.ts/jwtAuthentication";
import { CompanyLoginAuthentication } from "../../middlewares/loginAuthentication/companyLoginAuthentication";

const companyRoutes = Router();


//CREATE COMPANY CONTROLLER
const createCompanyController = new CreateCompanyController();
//GET COMPANY DATA 
const getCompanyDataController = new GetCompanyDataController();
//COMPANY LOGIN
const companyLoginController = new CompanyLoginController();
//REGISTRATION POSITION
const createNewPositionController = new CreateNewPositionController();
//GET POSITIONT BY ID

companyRoutes.post("/login", CompanyLoginAuthentication, companyLoginController.handle);

companyRoutes.post("/", createCompanyController.handle);

companyRoutes.get("/", jwtAuthentication, getCompanyDataController.handle);

companyRoutes.post("/create/position", createNewPositionController.handle);


export { companyRoutes };