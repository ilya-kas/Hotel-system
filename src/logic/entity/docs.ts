export interface RentDoc{
    id: number
    start_date: Date
    end_date: Date
    room_id: number
    client_id: number
}

export interface Recruitment {
    id: number
    begin_date: Date
    end_date: Date
    role: number
    salary: number
    employee_id: number
}

export interface Dismissal {
    id: number
    reason: string
    date: Date
    employee_id: number
}

export interface Delivery {
    id: number
    date: Date
    supplier: string

}

export interface Order {
    id: number
    table: number
}

export interface Menu {
    id: number
    date: Date
}

export interface ProfitDoc {
    id: number
    start_date: Date
    end_date: Date
    rooms_income: number
    restaurant_income: number
    salaries: number
    orders: number
    profit: number
}

export interface CleaningSchedule {
    id: number
    date: Date
    closed: boolean
}

export interface RoomLoadDoc {
    id: number
    start_date: Date
    end_date: Date
    stats: string/*{
        cheap: number,
        normal: number,
        rich: number
    }*/
}