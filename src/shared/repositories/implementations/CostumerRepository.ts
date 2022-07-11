import { PrismaClient, Service } from "@prisma/client";
import { ICostumerDTO } from "../../../modules/employee/dtos/ICostumerDTO";
import { ICostumerRepository } from "../ICostumerRepository";

//UUID FOR ID ON PROFILE
import { v4 as uuid } from "uuid";
import { IServiceDTO } from "../../../modules/employee/dtos/IServiceDTO";



class CostumerRepository implements ICostumerRepository {
    private prismaClient: any;


    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async createNewCostumer({ email, login, name, password, phone_number }: ICostumerDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async createNewCostumerPresencial({ email, login, name, last_name, password, phone_number }: ICostumerDTO): Promise<void> {
        const costumerProfile = await this.prismaClient.Costumer_presencial.create({
            data: {
                id: uuid(),
                email,
                login,
                name,
                last_name,
                password,
                phone_number
            }
        });


        return costumerProfile;
    }

    async createNewService({
        employee_id,
        additional_description,
        arrival_date,
        budget,
        costumer_id,
        description,
        final_result,
        photos,
        reference,
        status,
        type,
    }: IServiceDTO): Promise<Service> {
        const service = await this.prismaClient.Service.create({
            data: {
                id: uuid(),
                employee_id,
                additional_description,
                arrival_date,
                budget,
                costumer_id,
                description,
                final_result,
                photos,
                reference,
                status,
                type,
            }
        });

        return service;
    }

    async getCostumerProfile(id: string): Promise<Service> {
        const costumerProfile = await this.prismaClient.Costumer.findFirst({
            where: {
                id
            },
            include: {
                services: true
            }
        });

        return costumerProfile;
    }

    async findCostumerByEmail(email: string): Promise<Service> {
        const costumer = await this.prismaClient.costumer.findFirst({
            where: {
                email
            }
        });

        return costumer;
    }

    async findCostumerById(id: string): Promise<Service> {
        const costumer = await this.prismaClient.costumer.findFirst({
            where: {
                id
            }
        });

        return costumer;
    }
}

export { CostumerRepository };