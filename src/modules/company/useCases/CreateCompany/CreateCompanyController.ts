import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            cnpj,
            login,
            name,
            password,
            phone_number,
            email
        } = request.body;

        //TODOS OS CAMPOS DEVEM ESTAR PREENCHIDOS
        if (!cnpj.trim() || !login.trim() || !name.trim() || !password.trim() || !email.trim()) {
            return response.send("Preencha todos os campos !");
        };

        const createCompanyUseCase = container.resolve(CreateCompanyUseCase);


        const companyProfile = await createCompanyUseCase.execute({
            cnpj,
            login,
            name,
            password,
            phone_number,
            email
        });

        return response.status(201).json(companyProfile);
    }
}

export { CreateCompanyController };