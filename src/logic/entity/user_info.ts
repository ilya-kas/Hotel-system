export interface User{
    id: number
    mail: string
    name: string
    surname: string
    passport_number: number
    passport_series: string
    role: number
}

export interface Credentials{
    owner_id: number
    login: string
    password: string
}