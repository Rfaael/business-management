import { Position } from "@prisma/client";

interface IAddNewPosition {
    id?: string;

    position_name: string;

    // employees_profiles: Position[];

    addNewEmployee: boolean;
    deleteAnEmployee: boolean;
    updateAnEmployee: boolean;
    getCompanyProfile: boolean;

    createAnewCostumerProfile: boolean;
    getCostumerProfile: boolean;
    createAnewSale: boolean;
    createAnewService: boolean;
}

export { IAddNewPosition };