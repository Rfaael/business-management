import { Service } from "@prisma/client";
import { IServiceDTO } from "../../dtos/IServiceDTO";

interface IServiceRepository {
    createNewService({
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
    }: IServiceDTO): Promise<Service>;
}

export { IServiceRepository };