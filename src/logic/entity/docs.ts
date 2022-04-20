class RentDoc{
    id: number
    start_date: Date
    end_date: Date
    room_id: number
    client_id: number
}

class Recruitment {
    id: number
    begin_date: Date
    end_date: Date
    role: number
    salary: number
    employee_id: number
}

class Dismissal {
    id: number
    reason: string
    date: Date
    employee_id: number
}

class Delivery {
    id: number
    date: Date
    supplier: string

}

class Order {
    id: number
    table: number
}

class Menu {
    id: number
    date: Date
}

class ProfitDoc {
    id: number
    start_date: Date
    end_date: Date
    rooms_income: number
    restaurant_income: number
    salaries: number
    orders: number
    profit: number
}

class CleaningSchedule {
    id: number
    date: Date
    closed: boolean
}

class RoomLoadDoc {
    id: number
    start_date: Date
    end_date: Date
    stats: string
}