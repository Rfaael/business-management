import { Request, Response } from "express";

class EmployeeLoginController {
    async handle(request: Request, response: Response): Promise<Response> {
        return response.send("Login Realizado com sucesso");
    }
}

export { EmployeeLoginController };