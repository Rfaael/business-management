import { Employee } from "@prisma/client";
import { IAddNewEmployee } from "../../dtos/IAddNewEmployee";

interface EmployeeProfile {
    email: string;
    name: string;
    password: string;
    permissions: string;
    phone_number: string;
    position: string;
}

interface IEmployeeRepository {
    addNewEmployee(
        {
            company_id,
            email,
            id,
            name,
            login,
            password,
            permissions,
            phone_number,
            position
        }: IAddNewEmployee
    ): Promise<Employee>;
    getEmployee(id: string): Promise<Employee[]>;
    deleteEmployeeById(id: string): Promise<any>;
    findEmployeeByEmail(email: string): Promise<Employee>;
    findEmployeeById(id: string): Promise<Employee>;
    updateProfile(emp_id: string, {
        email,
        name,
        password,
        permissions,
        phone_number,
        position
    }: EmployeeProfile): Promise<Employee>;
    login(login: string, password: string): Promise<any>;
}

export { IEmployeeRepository, EmployeeProfile };