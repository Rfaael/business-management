import { Service } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../../../../shared/repositories/ICostumerRepository";


@injectable()
class GetCostumerProfielUseCase {

    constructor(
        @inject("CostumerRepository")
        private costumerRepository: ICostumerRepository
    ) { }

    async execute(id: string): Promise<Service | void> {
        const ifCostumerExists = await this.costumerRepository.findCostumerById(id);

        if (ifCostumerExists) {
            console.log("Costumer does not exists");
            return;
        }

        const costumerProfile = await this.costumerRepository.getCostumerProfile(id);

        return costumerProfile;
    }
}

export { GetCostumerProfielUseCase };