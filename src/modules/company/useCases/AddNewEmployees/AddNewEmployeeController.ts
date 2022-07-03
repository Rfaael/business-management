import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddNewEmployeeUseCase } from "./AddNewEmployeeUseCase";

class AddNewEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            company_id,
            name,
            email,
            login,
            password,
            phone_number,
            position_id,
        } = request.body;

        if (!company_id.trim() || !name.trim() || !email.trim() || !password.trim() || !position_id.trim()) {
            return response.send("Por favor preencha todos os campos !");
        }

        const useCase = container.resolve(AddNewEmployeeUseCase);

        const employeeProfile = await useCase.execute({
            company_id,
            name,
            email,
            login,
            password,
            phone_number,
            position_id,
        });

        return response.status(201).json(employeeProfile);
    }
}

export { AddNewEmployeeController };