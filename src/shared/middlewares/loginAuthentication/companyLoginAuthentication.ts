import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CompanyLoginUseCase } from "../../../modules/company/useCases/CompanyLogin/CompanyLoginUseCase";

import { sign } from "jsonwebtoken";

export async function CompanyLoginAuthentication(request: Request, response: Response, next: NextFunction) {

    const {
        login,
        password
    } = request.body;

    const companyLoginUseCase = container.resolve(CompanyLoginUseCase);

    const companyProfileLogin = await companyLoginUseCase.execute(login, password);

    //SE O LOGIN FOR REALIZADO COM SUCESSO ADCIONAR OS DADOS NECESSARIOS AO REQUEST
    if (companyProfileLogin) {

        const token = sign(
            {
                id: companyProfileLogin
            },
            "SECRET",
            {
                expiresIn: 300
            });

        request.info = {
            token,
            id: companyProfileLogin
        };
        next()
    } else {

        console.log("Login invalido");
    }
}