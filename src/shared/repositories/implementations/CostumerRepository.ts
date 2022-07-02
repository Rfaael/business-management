import { Costumer, PrismaClient, Service } from "@prisma/client";
import { ICostumerDTO } from "../../../modules/employee/dtos/ICostumerDTO";
import { ICostumerRepository } from "../ICostumerRepository";

//UUID FOR ID ON PROFILE
import { v4 as uuid } from "uuid";
import { IServiceDTO } from "../../../modules/employee/dtos/IServiceDTO";



class CostumerRepository implements ICostumerRepository {
    private client: any = new PrismaClient();

    async create({ email, login, name, password, phone_number }: ICostumerDTO): Promise<Costumer> {
        const costumerProfile = await this.client.Costumer.create({
            data: {
                id: uuid(),
                email,
                login,
                name,
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
        const service = await this.client.Service.create({
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
        const costumerProfile = await this.client.Costumer.findFirst({
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
        const costumer = await this.client.costumer.findFirst({
            where: {
                email
            }
        });

        return costumer;
    }

    async findCostumerById(id: string): Promise<Service> {
        const costumer = await this.client.costumer.findFirst({
            where: {
                id
            }
        });

        return costumer;
    }
}

export { CostumerRepository };