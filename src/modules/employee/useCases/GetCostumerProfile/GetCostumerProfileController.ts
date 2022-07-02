import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCostumerProfielUseCase } from "./GetCostumerProfileUseCase";

class GetCostumerProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const getCostumerProfileUseCase = container.resolve(GetCostumerProfielUseCase);

        const costumerProfile = await getCostumerProfileUseCase.execute(id);

        return response.json(costumerProfile);
    }
}

export { GetCostumerProfileController };