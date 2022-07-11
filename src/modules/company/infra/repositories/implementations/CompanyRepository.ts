import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { ICreateCompanyDTO } from "../../../dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "../ICompanyRepository";
import { Company } from "@prisma/client";

//UUID FOR COMPANY ID
import { v4 as uuid } from "uuid";


class CompanyRepository implements ICompanyRepository {
    private prismaClient: any = new PrismaClient();


    async create({ cnpj, login, name, password, phone_number, email }: ICreateCompanyDTO): Promise<Company> {

        const company = await this.prismaClient.company.create({
            data: {
                cnpj,
                id: uuid(),
                login,
                name,
                password,
                phone_number,
                email
            },
        });

        return company;
    }

    async getCompanyProfileAndEmployees(id: string) {
        const companyProfile = await this.prismaClient.company.findUnique({
            where: {
                id
            },
            include: {
                employees: true
            }
        })

        return companyProfile;
    }

    async findCompanyByCnpj(cnpj: string): Promise<Company> {
        const company = await this.prismaClient.Company.findFirst({
            where: {
                cnpj
            }
        });

        return company;
    }

    async findCompanyById(id: string): Promise<Company> {
        const company = await this.prismaClient.findFirst({
            where: {
                id
            }
        });

        return company;
    }

    async login(login: string, password: string): Promise<any> {
        const companyProfile = await this.prismaClient.company.findFirst({
            where: {
                login,
                password
            },
            select: {
                name: true,
                id: true,
            }
        });

        if (!companyProfile) {
            return false;
        }

        return companyProfile.id;
    }
}

export { CompanyRepository };
