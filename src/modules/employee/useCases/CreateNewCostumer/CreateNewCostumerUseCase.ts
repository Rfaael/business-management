import { inject, injectable } from "tsyringe";
import { ICostumerDTO } from "../../dtos/ICostumerDTO";
import { ICostumerRepository } from "../../../../shared/repositories/ICostumerRepository";


@injectable()
class CreateNewCostumerUseCase {
    constructor(
        @inject("CostumerRepository")
        private costumerRepository: ICostumerRepository
    ) { }

    async execute({
        email,
        login,
        name,
        last_name,
        password,
        phone_number
    }: ICostumerDTO): Promise<any | void> {

        // const ifCostumerAlredyExits = await this.costumerRepository.findCostumerByEmail(email);


        // if (ifCostumerAlredyExits) {
        //     console.log("Costumer alredy exists");
        //     return;
        // }


        const costumerProfile = await this.costumerRepository.createNewCostumerPresencial({
            email,
            login,
            name,
            last_name,
            password,
            phone_number
        });

        return costumerProfile;
    }
}

export { CreateNewCostumerUseCase };