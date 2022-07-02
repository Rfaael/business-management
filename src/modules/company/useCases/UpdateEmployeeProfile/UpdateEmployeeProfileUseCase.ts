import { inject, injectable } from "tsyringe";
import { EmployeeProfile, IEmployeeRepository } from "../../infra/repositories/IEmployeeRepository";


@injectable()
class UpdateEmployeeProfileUseCase {

    constructor(
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeeRepository
    ) { }


    async execute(id: string, {
        email,
        name,
        password,
        permissions,
        phone_number,
        position
    }: EmployeeProfile) {

        const updatedProfile = this.employeeRepository.updateProfile(id, {
            email,
            name,
            password,
            permissions,
            phone_number,
            position
        });


        return updatedProfile;
    }
}

export { UpdateEmployeeProfileUseCase };