import { Position } from "@prisma/client";
import { IAddNewPosition } from "../../dtos/IAddNewPosition";

interface IPositionRepository {
    createNewPosition({
        addNewEmployee,
        createAnewCostumerProfile,
        createAnewSale,
        createAnewService,
        deleteAnEmployee,
        getCompanyProfile,
        getCostumerProfile,
        position_name,
        updateAnEmployee
    }: IAddNewPosition): Promise<Position>;

}

export { IPositionRepository };