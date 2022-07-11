import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../infra/repositories/IEmployeeRepository";

@injectable()
class FindEmployeeByIdUseCase {
    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeeRepository
    ) {

    }
    async execute(id: string) {
        const allEmployees = await this.employeesRepository.findEmployeeById(id);

        return allEmployees;
    }
}

export { FindEmployeeByIdUseCase };