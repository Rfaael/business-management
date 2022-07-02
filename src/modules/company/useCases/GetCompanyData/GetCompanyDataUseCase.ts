import { Company } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../infra/repositories/ICompanyRepository";



@injectable()
class GetCompanyDataUseCase {

    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ) { }

    async execute(id: string): Promise<Company> {

        const companyData = await this.companyRepository.getCompanyProfileAndEmployees(id);


        return companyData;
    }
}


export { GetCompanyDataUseCase };