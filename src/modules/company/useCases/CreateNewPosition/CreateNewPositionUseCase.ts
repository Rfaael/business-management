import { Position } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IAddNewPosition } from "../../dtos/IAddNewPosition";
import { IPositionRepository } from "../../infra/repositories/IPositionsRepository";


@injectable()
class CreateNewPositonUseCase {

    constructor(
        @inject("PositionRepository")
        private positionRepository: IPositionRepository
    ) { }

    async execute({
        addNewEmployee,
        createAnewCostumerProfile,
        createAnewSale,
        createAnewService,
        deleteAnEmployee,
        getCompanyProfile,
        getCostumerProfile,
        position_name,
        updateAnEmployee
    }: IAddNewPosition): Promise<Position> {


        const newPosition = await this.positionRepository.createNewPosition({
            addNewEmployee,
            createAnewCostumerProfile,
            createAnewSale,
            createAnewService,
            deleteAnEmployee,
            getCompanyProfile,
            getCostumerProfile,
            position_name,
            updateAnEmployee
        });

        return newPosition;
    }
}


export { CreateNewPositonUseCase };