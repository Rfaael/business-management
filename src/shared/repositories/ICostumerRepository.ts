import { Costumer, Service } from "@prisma/client";
import { ICostumerDTO } from "../../modules/employee/dtos/ICostumerDTO";
import { IServiceDTO } from "../../modules/employee/dtos/IServiceDTO";

interface ICostumerRepository {
    create({
        email,
        login,
        name,
        password,
        phone_number
    }: ICostumerDTO): Promise<Costumer>;

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
    }: IServiceDTO): Promise<Service>;

    getCostumerProfile(id: string): Promise<Service>;

    findCostumerByEmail(email: string): Promise<Service>;

    findCostumerById(id: string): Promise<Service>;
}

export { ICostumerRepository };