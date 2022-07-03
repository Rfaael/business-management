import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewPositonUseCase } from "./CreateNewPositionUseCase";

class CreateNewPositionController {
    async handle(request: Request, response: Response): Promise<Response> {

        const {
            addNewEmployee,
            createAnewCostumerProfile,
            createAnewSale,
            createAnewService,
            deleteAnEmployee,
            getCompanyProfile,
            getCostumerProfile,
            position_name,
            updateAnEmployee
        } = request.body;


        const createNewPositionUseCase = container.resolve(CreateNewPositonUseCase);

        const position = await createNewPositionUseCase.execute({
            addNewEmployee,
            createAnewCostumerProfile,
            createAnewSale,
            createAnewService,
            deleteAnEmployee,
            getCompanyProfile,
            getCostumerProfile,
            position_name,
            updateAnEmployee
        });

        return response.status(201).json(position);
    }
}


export { CreateNewPositionController };