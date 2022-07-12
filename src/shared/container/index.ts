import { container } from "tsyringe";
import { ICompanyRepository } from "../../modules/company/infra/repositories/ICompanyRepository";
import { IEmployeeRepository } from "../../modules/company/infra/repositories/IEmployeeRepository";
import { CompanyRepository } from "../../modules/company/infra/repositories/implementations/CompanyRepository";
import { EmployeeRepository } from "../../modules/company/infra/repositories/implementations/EmployeeRepository";
import { PositionRepository } from "../../modules/company/infra/repositories/implementations/PositionRepository";
import { IPositionRepository } from "../../modules/company/infra/repositories/IPositionsRepository";
import { ServiceRepository } from "../../modules/employee/infra/repositories/implementations/ServiceRepository";
import { IServiceRepository } from "../../modules/employee/infra/repositories/IServiceRepository";
import { ICostumerRepository } from "../../modules/company/infra/repositories/ICostumersRepository";
import { CostumersRepository } from "../../modules/company/infra/repositories/implementations/CostumersRepository";

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
    "CostumersRepository",
    CostumersRepository
)

//POSITION REPOSITORY
container.registerSingleton<IPositionRepository>(
    "PositionRepository",
    PositionRepository
)

//SERVICE REPOSITORY
container.registerSingleton<IServiceRepository>(
    "ServiceRepository",
    ServiceRepository
)