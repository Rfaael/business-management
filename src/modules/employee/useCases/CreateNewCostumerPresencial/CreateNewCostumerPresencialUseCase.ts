import { CostumerPresencial } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../../../company/infra/repositories/ICostumersRepository";
import { ICostumerPresencial } from "../../dtos/ICostumerDTO";


@injectable()
class CreateNewCostumerPresencialUseCase {
    constructor(
        @inject("CostumersRepository")
        private costumerRepository: ICostumerRepository
    ) { }

    async execute({
        email,
        name,
        last_name,
        phone_number,
        address
    }: ICostumerPresencial): Promise<CostumerPresencial> {
        //NECESSARIO FAZER TODAS AS VERIFICACOES

        const costumerProfile = await this.costumerRepository.newCostumerPresencial({
            email,
            name,
            last_name,
            phone_number,
            address
        });

        return costumerProfile;
    }
}

export { CreateNewCostumerPresencialUseCase };