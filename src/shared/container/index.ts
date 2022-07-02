import { container } from "tsyringe";
import { ICompanyRepository } from "../../modules/company/infra/repositories/ICompanyRepository";
import { IEmployeeRepository } from "../../modules/company/infra/repositories/IEmployeeRepository";
import { CompanyRepository } from "../../modules/company/infra/repositories/implementations/CompanyRepository";
import { EmployeeRepository } from "../../modules/company/infra/repositories/implementations/EmployeeRepository";
import { ICostumerRepository } from "../repositories/ICostumerRepository";
import { CostumerRepository } from "../repositories/implementations/CostumerRepository";

//COMPANY REPOSITORY
container.registerSingleton<ICompanyRepository>(
    "CompanyRepository",
    CompanyRepository
);

//EMPLOYEES REPOSITORIES
container.registerSingleton<IEmployeeRepository>(
    "EmployeesRepository",
    EmployeeRepository
)

//COSTUMERS REPOSITORY
container.registerSingleton<ICostumerRepository>(
    "CostumerRepository",
    CostumerRepository
)