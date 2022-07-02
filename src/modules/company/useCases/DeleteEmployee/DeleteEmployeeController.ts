import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

class DeleteEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteEmployeeUseCase = container.resolve(DeleteEmployeeUseCase);

        const deletedEmployee = await deleteEmployeeUseCase.execute(id);

        return response.json(deletedEmployee);
    }
}


export { DeleteEmployeeController };