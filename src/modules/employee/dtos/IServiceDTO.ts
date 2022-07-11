interface IServiceDTO {
    id?: string

    costumer_id: string
    employee_id?: string

    description?: string
    additional_description?: string

    photos?: string

    reference: string

    type: string

    status: string
    budget: number

    arrival_date: string
    final_result: string

}

export { IServiceDTO };
