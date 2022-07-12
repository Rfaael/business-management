import { Service } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../../../company/infra/repositories/ICostumersRepository";


@injectable()
class GetCostumerProfielUseCase {

    constructor(
        @inject("CostumerRepository")
        private costumerRepository: ICostumerRepository
    ) { }

    async execute(id: string): Promise<Service | void> {

    }
}

export { GetCostumerProfielUseCase };