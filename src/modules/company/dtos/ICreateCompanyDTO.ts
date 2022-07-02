interface ICreateCompanyDTO {
    id?: string;
    name: string;
    cnpj: string;
    email: string;
    login: string;
    password: string;
    phone_number: number;
}

export { ICreateCompanyDTO };