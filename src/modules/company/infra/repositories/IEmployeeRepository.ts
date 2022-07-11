import { Employee } from "@prisma/client";
import { IAddNewEmployee } from "../../dtos/IAddNewEmployee";

interface IEmployeeRepository {

    addNewEmployee(
        {
            company_id,
            email,
            id,
            name,
            login,
            password,
            phone_number,
        }: IAddNewEmployee
    ): Promise<Employee>;

    findEmployeeById(id: string): Promise<Employee>;

    deleteEmployeeById(id: string): Promise<any>;

    findEmployeeByEmail(email: string): Promise<Employee>;

    updateProfile(emp_id: string, {
        email,
        name,
        password,
        phone_number,
        position_id
    }: IAddNewEmployee): Promise<Employee>;

    login(login: string, password: string): Promise<any>;
}

export { IEmployeeRepository };