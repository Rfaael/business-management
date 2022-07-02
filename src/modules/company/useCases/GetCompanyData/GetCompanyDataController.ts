import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCompanyDataUseCase } from "./GetCompanyDataUseCase";

class GetCompanyDataController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.body;

        const getCompanyDataUseCase = container.resolve(GetCompanyDataUseCase);

        const companyData = await getCompanyDataUseCase.execute(id);

        return response.json(companyData);
    }
}

export { GetCompanyDataController };