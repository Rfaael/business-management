import { CostumerOnline, CostumerPresencial } from "@prisma/client";
import { ICostumerOnline, ICostumerPresencial } from "../../../employee/dtos/ICostumerDTO";

interface ICostumerRepository {
    newCostumerPresencial({
        name,
        last_name,
        email,
        phone_number,
        address,
    }: ICostumerPresencial): Promise<CostumerPresencial>;

    newCostumerOnline({
        email,
        last_name,
        login,
        name,
        password,
        phone_number
    }: ICostumerOnline): Promise<CostumerOnline>;


    // findById(id: string): Promise<CostumerPresencial | CostumerOnline>;

    //COMO FAZER COM QUE OS MESMO METODOS FUNCIONEM PARA OS DOIS REPOSITORORIOS

    //findByName()
    //findById()
}

export { ICostumerRepository };