import { PrismaClient, Service } from "@prisma/client";
import { IServiceDTO } from "../../../dtos/IServiceDTO";
import { IServiceRepository } from "../IServiceRepository";

import { v4 as uuid } from "uuid";

class ServiceRepository implements IServiceRepository {
    private prismaClient: any;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async createNewService({
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
        employee_id
    }: IServiceDTO): Promise<Service> {
        const newService = await this.prismaClient.service.create({
            data: {
                id: uuid(),
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
                employee_id
            }
        });

        return newService;
    }

}

export { ServiceRepository };