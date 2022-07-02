import { Employee } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../infra/repositories/IEmployeeRepository";

@injectable()
class DeleteEmployeeUseCase {

    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeeRepository
    ) { }

    async execute(id: string): Promise<Employee | any> {

        const ifEmployeeExits = await this.employeesRepository.findEmployeeById(id);

        if (ifEmployeeExits) {
            return "Employee does not exists....";
        };

        const deletedEmployee = await this.employeesRepository.deleteEmployeeById(id);

        return deletedEmployee;
    }
}


export { DeleteEmployeeUseCase };