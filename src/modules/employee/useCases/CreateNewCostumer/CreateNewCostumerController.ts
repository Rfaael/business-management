import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewCostumerUseCase } from "./CreateNewCostumerUseCase";

class CreateNewCostumerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            login,
            name,
            last_name,
            password,
            phone_number
        } = request.body;

        const createNewCostumerUseCase = container.resolve(CreateNewCostumerUseCase);

        const costumer = await createNewCostumerUseCase.execute({
            email,
            login,
            name,
            last_name,
            password,
            phone_number
        });

        return response.status(201).json(costumer);
    }
}

export { CreateNewCostumerController };