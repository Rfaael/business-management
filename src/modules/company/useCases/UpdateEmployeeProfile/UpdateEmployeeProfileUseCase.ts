import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../infra/repositories/IEmployeeRepository";


interface teste {
    email: string;
    name: string;
    password: string;
    phone_number: string;
    position: string;
}




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
        phone_number,
        position
    }: teste) {

        // const updatedProfile = this.employeeRepository.updateProfile(id, {
        //     email,
        //     name,
        //     password,
        //     phone_number,
        //     position
        // });


        // return updatedProfile;
    }
}

export { UpdateEmployeeProfileUseCase };