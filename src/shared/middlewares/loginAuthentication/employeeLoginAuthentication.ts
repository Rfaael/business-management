import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { EmployeeLoginUseCase } from "../../../modules/employee/useCases/EmployeeLogin/EmployeeLoginUseCase";

export async function employeeLoginAuthentication(request: Request, response: Response, next: NextFunction) {
    const {
        login,
        password
    } = request.body;

    const employeeLoginUseCase = container.resolve(EmployeeLoginUseCase);

    const loginResult = await employeeLoginUseCase.execute(login, password);


    if (loginResult) {
        next()
    } else {
        console.log("login invalido");
    }
}