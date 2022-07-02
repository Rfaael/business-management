//ESTE MIDDDLEWARE SERA USADO PARA VERIFICAR SE O USUARIO POSSUI UM TOKEN VALIDO
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export async function jwtAuthentication(request: Request, response: Response, next: NextFunction) {
    const token = request.headers['x-access-token'];

    if (!token) {
        return response.status(400).json({
            auth: false,
            message: "INVALID TOKEN"
        })
    }

    jwt.verify(String(token), "SECRET", (err: any, decoded: any) => {
        if (err) {
            return response.status(500).json({
                message: "INTERNAL SERVER ERROR...."
            })
        };

        request.token = {
            decoded
        }
        next();
    })
}