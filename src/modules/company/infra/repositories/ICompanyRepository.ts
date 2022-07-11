import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { Company } from "@prisma/client";

interface ICompanyRepository {

    create({ cnpj, login, name, password, phone_number, email }: ICreateCompanyDTO): Promise<Company>;

    getCompanyProfileAndEmployees(id: string): Promise<Company>;

    findCompanyByCnpj(cnpj: string): Promise<Company>;

    findCompanyById(id: string): Promise<Company>;

    login(login: string, password: string): Promise<any>;

}

export { ICompanyRepository };