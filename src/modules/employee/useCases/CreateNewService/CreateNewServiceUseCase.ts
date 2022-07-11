import { Service } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IServiceDTO } from "../../dtos/IServiceDTO";
import { IServiceRepository } from "../../infra/repositories/IServiceRepository";


@injectable()
class CreateNewServiceUseCase {

    constructor(
        @inject("ServiceRepository")
        private serviceRepository: IServiceRepository
    ) { }

    async execute({
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

        const newServiceRequest = await this.serviceRepository.createNewService({
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
        });

        return newServiceRequest;
    }
}

export { CreateNewServiceUseCase };