interface IAddNewEmployee {
    id?: string;
    company_id: string;
    name: string;
    email: string;
    login: string;
    password: string;
    phone_number: number;
    position_id: string;
};

export { IAddNewEmployee };