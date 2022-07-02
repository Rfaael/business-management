import { Request, Response } from "express";

class CompanyLoginController {
    async handle(request: Request, response: Response): Promise<Response> {
        return response.json(request.info);
    }
}

export { CompanyLoginController };