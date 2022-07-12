interface ICostumerOnline {
    id?: string
    login: string
    password: string
    name: string
    last_name: string;
    email: string
    phone_number: number
}

interface ICostumerPresencial {
    id?: string;
    name: string;
    last_name?: string;
    email?: string;
    phone_number: string;
    address?: string;
    services?: string;
}

export { ICostumerOnline, ICostumerPresencial };