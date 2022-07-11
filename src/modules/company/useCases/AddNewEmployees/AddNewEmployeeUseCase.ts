import { IAddNewEmployee } from "../../dtos/IAddNewEmployee";
import { Employee } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../infra/repositories/IEmployeeRepository";
import { IPositionRepository } from "../../infra/repositories/IPositionsRepository";

@injectable()
class AddNewEmployeeUseCase {

    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeeRepository,
        @inject("PositionRepository")
        private positionRepository: IPositionRepository
    ) {

    }

    async execute({
        company_id,
        name,
        last_name,
        email,
        login,
        password,
        phone_number,
        position_id,
    }: IAddNewEmployee): Promise<Employee | any> {

        //CHECK IF EMPLOYEE ALREDY EXISTS
        const ifEmployeeAlredyExists = await this.employeesRepository.findEmployeeByEmail(email);

        if (ifEmployeeAlredyExists) {
            return "Email alredy in use.";
        }


        const employeeProfile = await this.employeesRepository.addNewEmployee(
            {
                company_id,
                name,
                last_name,
                email,
                login,
                password,
                phone_number,
                position_id,
            }
        );

        return employeeProfile;
    }
}

export { AddNewEmployeeUseCase };