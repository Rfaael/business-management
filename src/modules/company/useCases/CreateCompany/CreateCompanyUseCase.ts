import { Company } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "../../infra/repositories/ICompanyRepository";


@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ) { }

    async execute({
        cnpj,
        login,
        name,
        password,
        phone_number,
        email
    }: ICreateCompanyDTO): Promise<Company | any> {

        const ifCompanyAlredyExists = await this.companyRepository.findCompanyByCnpj(cnpj);


        if (ifCompanyAlredyExists) {
            return "CNPJ alredy in use....";
        }


        const companyProfile = await this.companyRepository.create({
            cnpj,
            login,
            name,
            password,
            phone_number,
            email
        });

        return companyProfile;
    }
}

export { CreateCompanyUseCase };