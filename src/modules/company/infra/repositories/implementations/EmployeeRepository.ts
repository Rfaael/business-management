import { Employee, Prisma, PrismaClient } from "@prisma/client";
import { IAddNewEmployee } from "../../../dtos/IAddNewEmployee";
import { IEmployeeRepository, EmployeeProfile } from "../IEmployeeRepository";

//UUID for employee ID
import { v4 as uuid } from "uuid";

class EmployeeRepository implements IEmployeeRepository {
    private prismaClient: any = new PrismaClient();


    //REFATORAR ESTA FUNCAO
    async getEmployee(id: string): Promise<Employee[]> {

        //FUNCAO SO PODERA SER ACESSADA POR UMA "EMPRESA" AUTENTICADA
        //NECESSITA SER UMA FUNCAO QUE RETORNE TODOS OS FUNCIONARIOS DA EMPRESA AUTENTICADA
        //FAZENDO A BUSCA PELO ID DA EMRPESA, VINDO DO MIDDLEWARE 

        const allEmployees = await this.prismaClient.employee.findMany({
            where: {
                id
            },
            include: {
                company: {
                    select: {
                        name: true,
                        cnpj: true,
                        email: true,
                        phone_number: true
                    }
                }
            }
        });

        return allEmployees;
    }

    async addNewEmployee(
        {
            company_id,
            email,
            name,
            login,
            password,
            permissions,
            phone_number,
            position
        }: IAddNewEmployee): Promise<Employee> {

        const employee = await this.prismaClient.employee.create({
            data: {
                company_id,
                email,
                id: uuid(),
                name,
                login,
                password,
                permissions,
                phone_number,
                position
            }
        });

        return employee;
    }

    async deleteEmployeeById(id: string) {
        //VAI SER NECESSARIO VERIFICACAO SE O USUARIO ESTA USANDO O USER DA EMPRESA ("PRINCIPAL")
        const deletedEmployee = await this.prismaClient.employee.delete({
            where: {
                id
            }
        });

        return deletedEmployee;
    }

    async findEmployeeByEmail(email: string): Promise<Employee> {
        const employee = await this.prismaClient.employee.findFirst({
            where: {
                email
            }
        });

        return employee;
    }

    async findEmployeeById(id: string): Promise<Employee> {
        const employee = await this.prismaClient.employee.findFirst({
            where: {
                id
            }
        });

        return employee;
    }

    async updateProfile(emp_id: string, { email, name, password, permissions, phone_number, position }: EmployeeProfile): Promise<Employee> {
        const employee = await this.prismaClient.employee.update({
            where: { id: emp_id },
            data: {
                email: email != " " ? email : null,
                name: name != " " ? name : null,
                password: password != " " ? password : null,
                permissions: permissions != " " ? permissions : null,
                phone_number: phone_number != " " ? phone_number : null,
                position: position != " " ? position : null,
            }
        });

        return employee;
    }

    async login(login: string, password: string): Promise<any> {
        const loginAction = await this.prismaClient.employee.findFirst({
            where: {
                login,
                password
            }
        })

        if (loginAction) {
            return true;
        } else {
            return false;
        }
    }
}


export { EmployeeRepository };