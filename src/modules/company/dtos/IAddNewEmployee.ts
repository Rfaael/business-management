interface IAddNewEmployee {
    id?: string;
    company_id: string;
    name: string;
    email: string;
    login: string;
    password: string;
    phone_number: number;
    position: string;
    permissions: string;
};

export { IAddNewEmployee };