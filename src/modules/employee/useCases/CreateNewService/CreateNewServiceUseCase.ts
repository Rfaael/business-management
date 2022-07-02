import { Service } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { ICostumerRepository } from "../../../../shared/repositories/ICostumerRepository";
import { IServiceDTO } from "../../dtos/IServiceDTO";


@injectable()
class CreateNewServiceUseCase {
    constructor(
        @inject("CostumerRepository")
        private costumerRepository: ICostumerRepository
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
        const service = await this.costumerRepository.createNewService({
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

        return service;
    }
}

export { CreateNewServiceUseCase };