import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../infra/repositories/ICompanyRepository";

@injectable()
class CompanyLoginUseCase {

    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ) { }

    async execute(login: string, password: string): Promise<string> {

        const loginAction = await this.companyRepository.login(login, password);

        return loginAction;
    }
}

export { CompanyLoginUseCase };