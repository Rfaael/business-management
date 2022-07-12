import { CostumerOnline, CostumerPresencial, PrismaClient } from "@prisma/client";
import { ICostumerOnline, ICostumerPresencial } from "../../../../employee/dtos/ICostumerDTO";
import { ICostumerRepository } from "../ICostumersRepository";

import { v4 as uuid } from "uuid";

class CostumersRepository implements ICostumerRepository {
    private prismaClient: any;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async newCostumerPresencial({ name, last_name, email, phone_number, address }: ICostumerPresencial): Promise<CostumerPresencial> {

        const costumerPresencial = await this.prismaClient.CostumerPresencial.create({
            data: {
                id: uuid(),
                name,
                last_name,
                email,
                phone_number,
                address
            }
        });

        return costumerPresencial;
    }

    async newCostumerOnline({ email, last_name, login, name, password, phone_number }: ICostumerOnline): Promise<CostumerOnline> {
        const costumerOnline = await this.prismaClient.CostumerPresencial.create({
            data: {
                id: uuid(),
                email,
                last_name,
                login,
                name,
                password,
                phone_number
            }
        });

        return costumerOnline;
    }

}


export { CostumersRepository };