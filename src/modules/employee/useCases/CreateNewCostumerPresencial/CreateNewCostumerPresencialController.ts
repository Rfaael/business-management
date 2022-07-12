import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewCostumerPresencialUseCase } from "./CreateNewCostumerPresencialUseCase";

class CreateNewCostumerPresencialController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            name,
            last_name,
            phone_number,
            address
        } = request.body;

        const createNewCostumerPresencialUseCase = container.resolve(CreateNewCostumerPresencialUseCase);

        const costumer = await createNewCostumerPresencialUseCase.execute({
            email,
            name,
            last_name,
            phone_number,
            address
        });

        return response.status(201).json(costumer);
    }
}

export { CreateNewCostumerPresencialController };