import { Employee, PrismaClient } from "@prisma/client";
import { IAddNewEmployee } from "../../../dtos/IAddNewEmployee";
import { IEmployeeRepository } from "../IEmployeeRepository";

//UUID for employee ID
import { v4 as uuid } from "uuid";

class EmployeeRepository implements IEmployeeRepository {
    private prismaClient: any = new PrismaClient();


    //REFATORAR ESTA FUNCAO
    async findEmployeeById(id: string): Promise<Employee> {

        //FUNCAO SO PODERA SER ACESSADA POR UMA "EMPRESA" AUTENTICADA
        //NECESSITA SER UMA FUNCAO QUE RETORNE TODOS OS FUNCIONARIOS DA EMPRESA AUTENTICADA
        //FAZENDO A BUSCA PELO ID DA EMRPESA, VINDO DO MIDDLEWARE 

        const employee = await this.prismaClient.employee.findUnique({
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
                },
                position: true
            }
        });

        return employee;
    }

    async addNewEmployee(
        {
            company_id,
            email,
            name,
            login,
            password,
            phone_number,
            position_id
        }: IAddNewEmployee): Promise<Employee> {

        const employee = await this.prismaClient.employee.create({
            data: {
                company_id,
                email,
                id: uuid(),
                name,
                login,
                password,
                phone_number,
                position_id
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

    //REFATORAR ESTA FUNCAO
    async updateProfile(id: string, { email, name, password, phone_number, position_id }: IAddNewEmployee): Promise<Employee> {
        const employee = await this.prismaClient.employee.update({
            where: { id }
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