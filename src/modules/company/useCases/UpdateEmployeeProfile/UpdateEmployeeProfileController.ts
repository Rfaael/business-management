import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEmployeeProfileUseCase } from "./UpdateEmployeeProfileUseCase";

class UpdateEmployeeProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            email,
            name,
            password,
            permissions,
            phone_number,
            position
        } = request.body;


        const updateEmployeeProfileUseCase = container.resolve(UpdateEmployeeProfileUseCase);

        const employeeUpdated = await updateEmployeeProfileUseCase.execute(id, {
            email,
            name,
            password,
            permissions,
            phone_number,
            position
        });

        return response.status(201).json(employeeUpdated);
    }
}

export { UpdateEmployeeProfileController };