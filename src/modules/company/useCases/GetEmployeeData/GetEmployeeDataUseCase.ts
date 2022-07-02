import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../infra/repositories/IEmployeeRepository";

@injectable()
class GetEmployeeUseCase {
    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeeRepository
    ) {

    }
    async execute(id: string) {
        const allEmployees = await this.employeesRepository.getEmployee(id);

        return allEmployees;
    }
}

export { GetEmployeeUseCase };