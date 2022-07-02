import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../../company/infra/repositories/IEmployeeRepository";

@injectable()
class EmployeeLoginUseCase {
    constructor(
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeeRepository
    ) {

    }

    async execute(login: string, password: string): Promise<any> {
        const loginAction = await this.employeeRepository.login(login, password);

        return loginAction;
    }
}

export { EmployeeLoginUseCase };