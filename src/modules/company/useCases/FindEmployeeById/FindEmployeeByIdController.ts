import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEmployeeByIdUseCase } from "./FindEmployeeByIdUseCase";

class FindEmployeeByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findEmployeeById = container.resolve(FindEmployeeByIdUseCase);

        const employeeProfile = await findEmployeeById.execute(id);

        return response.json(employeeProfile);
    }
}


export { FindEmployeeByIdController };