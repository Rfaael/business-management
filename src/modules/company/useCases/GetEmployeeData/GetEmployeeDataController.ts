import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetEmployeeUseCase } from "./GetEmployeeDataUseCase";

class GetEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const getEmployeeUseCase = container.resolve(GetEmployeeUseCase);

        const allEmployees = await getEmployeeUseCase.execute(id);

        return response.json(allEmployees);
    }
}


export { GetEmployeeController };