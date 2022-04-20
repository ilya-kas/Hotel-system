class UserModel{
    id: number
    mail: string
    name: string
    surname: string
    passport_number: number
    passport_series: string
    role: number
}

class CredentialsModel{
    owner_id: number
    login: string
    password: string
}

class RentDocModel{
    id: number
    start_date: Date
    end_date: Date
    room_id: number
    client_id: number
}

class RoomModel {
    number: number
    room_count: number
    type: number
    client_id: number
}

class CleaningScheduleModel {
    id: number
    date: Date
    closed: boolean
}

class RoomCleaningModel {
    id: number
    cleaned: boolean
    room_id: number
    responsible_id: number
    schedule_id: number
}

class DismissalModel {
    id: number
    reason: string
    date: Date
    employee_id: number
}

class RecruitmentModel {
    id: number
    begin_date: Date
    end_date: Date
    role: number
    salary: number
    employee_id: number
}

class RoomLoadDocModel {
    id: number
    start_date: Date
    end_date: Date
    stats: string
}

class ProfitDocModel {
    id: number
    start_date: Date
    end_date: Date
    rooms_income: number
    restaurant_income: number
    salaries: number
    orders: number
    profit: number
}

class DeliveryModel {
    id: number
    date: Date
    supplier: string
}

class DeliveredProductModel {
    id: number
    delivery_id: number
    product_id: number
    count: number
}

class ProductModel {
    id: number
    name: string
    count: number
}

class ProductInDishModel {
    id: number
    dish_id: number
    product_id: number
    count: number
}

class DishModel {
    id: number
    name: string
    description: string
    price: number
}

class DishInOrderModel {
    id: number
    dish_id: number
    order_id: number
    count: number
}

class MenuModel {
    id: number
    date: Date
}

class DishInMenuModel {
    id: number
    dish_id: number
    menu_id: number
}

class OrderModel {
    id: number
    table: number
}
