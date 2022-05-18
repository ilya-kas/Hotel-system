import {Room} from "./rooms_info";

export interface RentDoc{
    id: number
    start_date: string //01.01.1970
    end_date: string //01.01.1970
    room: Room
    client_id: number
}

export interface Recruitment {
    id: number
    begin_date: string //01.01.1970
    end_date: string //01.01.1970
    role: number
    salary: number
    employee_id: number
}

export interface Dismissal {
    id: number
    reason: string
    date: string //01.01.1970
    employee_id: number
}

export interface Delivery {
    id: number
    date: string //01.01.1970
    supplier: string
    sum: number
    products: Array<{
        name: string,
        count: number
    }>
}

export interface Order {
    id: number
    table: number
    price: number,
    dishes: Array<{
        name: string,
        count: number
    }>
}

export interface Menu {
    id: number
    date: string //01.01.1970
    dishes: Array<{
        name: string,
        price: number
    }>
}

export interface ProfitDoc {
    id: number
    start_date: string //01.01.1970
    end_date: string //01.01.1970
    rooms_income: number
    restaurant_income: number
    salaries: number
    orders: number
    profit: number
}

export interface CleaningSchedule {
    id: number
    date: string //01.1970
    closed: boolean
    days: Array<{
        day: number,
        responsible_id: number,
        cleaned: boolean
    }>
}

export interface RoomLoadDoc {
    id: number
    free: number,
    taken: number,
    stats: {
        cheap: number,
        normal: number,
        vip: number
    }
}