import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewServiceUseCase } from "./CreateNewServiceUseCase";

class CreateNewServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            employee_id,
            additional_description,
            arrival_date,
            budget,
            costumer_id,
            description,
            final_result,
            photos,
            reference,
            status,
            type,
        } = request.body;

        const createNewServiceUseCase = container.resolve(CreateNewServiceUseCase);

        const service = await createNewServiceUseCase.execute({
            employee_id,
            additional_description,
            arrival_date,
            budget,
            costumer_id,
            description,
            final_result,
            photos,
            reference,
            status,
            type,
        });

        return response.status(201).json(service);
    }
}

export { CreateNewServiceController };