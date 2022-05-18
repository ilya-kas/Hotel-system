export interface User{
    id: number
    mail: string
    name: string
    surname: string
    passport_number: number
    passport_series: string
    role: Role
    credentials: {
        login: string,
        password: string
    }
}

export interface Worker extends User{
    salary: number
}

export enum Role{
    USER,
    MANAGER,
    CHEF,
    WAITER,
    CLEANER
}