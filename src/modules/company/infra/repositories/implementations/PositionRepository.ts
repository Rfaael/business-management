import { PrismaClient } from "@prisma/client";
import { IAddNewPosition } from "../../../dtos/IAddNewPosition";
import { IPositionRepository } from "../IPositionsRepository";
import { Position } from "@prisma/client";
import { v4 as uuid } from "uuid";



class PositionRepository implements IPositionRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async createNewPosition(
        {
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

        const newPosition = await this.prismaClient.position.create({
            data: {
                addNewEmployee,
                createAnewCostumerProfile,
                createAnewSale,
                createAnewService,
                deleteAnEmployee,
                getCompanyProfile,
                getCostumerProfile,
                id: uuid(),
                position_name,
                updateAnEmployee
            }
        });

        return newPosition;
    }
}

export { PositionRepository };