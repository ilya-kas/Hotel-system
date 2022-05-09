import {
    CleaningSchedule,
    Delivery,
    Dismissal, Menu,
    Order,
    ProfitDoc,
    Recruitment,
    RentDoc,
    RoomLoadDoc
} from "../../../logic/entity/docs";
import {Room, RoomCleaning} from "../../../logic/entity/rooms_info";
import {Credentials, User} from "../../../logic/entity/user_info";
import {DeliveredProduct, DishInMenu, DishInOrder, ProductInDish} from "../../../logic/entity/others";
import {Dish, Product} from "../../../logic/entity/products_info";

export class UserModel{
    id: number
    mail: string
    name: string
    surname: string
    passport_number: number
    passport_series: string
    role: number

    constructor(id, mail, name, surname, passport_number, passport_series, role) {
        this.id = id
        this.mail = mail
        this.name = name
        this.surname = surname
        this.passport_number = passport_number
        this.passport_series = passport_series
        this.role = role
    }

    toEntity(): User{
        return {
            id: this.id,
            mail: this.mail,
            name: this.name,
            surname: this.surname,
            passport_number: this.passport_number,
            passport_series: this.passport_series,
            role: this.role
        }
    }
}

export class CredentialsModel{
    owner_id: number
    login: string
    password: string

    constructor(owner_id, login, password) {
        this.owner_id = owner_id
        this.login = login
        this.password = password
    }

    toEntity(): Credentials{
        return {
            owner_id: this.owner_id,
            login: this.login,
            password: this.password
        }
    }
}

export class RentDocModel{
    id: number
    start_date: Date
    end_date: Date
    room_id: number
    client_id: number

    constructor(id, start_date, end_date, room_id, client_id) {
        this.id = id
        this.start_date = start_date
        this.end_date = end_date
        this.room_id = room_id
        this.client_id = client_id
    }

    toEntity(): RentDoc{
        return {
            id: this.id,
            start_date: this.start_date,
            end_date: this.end_date,
            room_id: this.room_id,
            client_id: this.client_id,
        }
    }
}

export class RoomModel {
    number: number
    room_count: number
    type: number
    client_id: number

    constructor(number, room_count, type, client_id) {
        this.number = number
        this.room_count = room_count
        this.type = type
        this.client_id = client_id
    }

    toEntity(): Room{
        return {
            number: this.number,
            room_count: this.room_count,
            type: this.type,
            client_id: this.client_id,
        }
    }
}

export class CleaningScheduleModel {
    id: number
    date: Date
    closed: boolean

    constructor(id, date, closed) {
        this.id = id
        this.date = date
        this.closed = closed
    }
    toEntity(): CleaningSchedule{
        return {
            id: this.id,
            date: this.date,
            closed: this.closed,
        }
    }

}

export class RoomCleaningModel {
    id: number
    cleaned: boolean
    room_id: number
    responsible_id: number
    schedule_id: number

    constructor(id, cleaned, room_id, responsible_id, schedule_id) {
        this.id = id
        this.cleaned = cleaned
        this.room_id = room_id
        this.responsible_id = responsible_id
        this.schedule_id = schedule_id
    }
    toEntity(): RoomCleaning{
        return {
            id: this.id,
            cleaned: this.cleaned,
            room_id: this.room_id,
            responsible_id: this.responsible_id,
            schedule_id: this.schedule_id,
        }
    }
}

export class DismissalModel {
    id: number
    reason: string
    date: Date
    employee_id: number

    constructor(id, reason, date, employee_id) {
        this.id = id
        this.reason = reason
        this.date = date
        this.employee_id = employee_id
    }
    toEntity(): Dismissal{
        return {
            id: this.id,
            reason: this.reason,
            date: this.date,
            employee_id: this.employee_id
        }
    }
}

export class RecruitmentModel {
    id: number
    begin_date: Date
    end_date: Date
    role: number
    salary: number
    employee_id: number

    constructor(id, begin_date, end_date, role, salary, employee_id) {
        this.id = id
        this.begin_date = begin_date
        this.end_date = end_date
        this.role = role
        this.salary = salary
        this.employee_id = employee_id
    }
    toEntity(): Recruitment{
        return {
            id: this.id,
            begin_date: this.begin_date,
            end_date: this.end_date,
            role: this.role,
            salary: this.salary,
            employee_id: this.employee_id,
        }
    }
}

export class RoomLoadDocModel {
    id: number
    start_date: Date
    end_date: Date
    stats: string/*{
        cheap: number,
        normal: number,
        rich: number
    }*/

    constructor(id, start_date, end_date, stats) {
        this.id = id
        this.start_date = start_date
        this.end_date = end_date
        this.stats = stats
    }
    toEntity(): RoomLoadDoc{
        return {
            id: this.id,
            start_date: this.start_date,
            end_date: this.end_date,
            stats: this.stats,
        }
    }
}

export class ProfitDocModel {
    id: number
    start_date: Date
    end_date: Date
    rooms_income: number
    restaurant_income: number
    salaries: number
    orders: number
    profit: number

    constructor(id, start_date, end_date, rooms_income, restaurant_income, salaries, orders, profit ) {
        this.id = id
        this.start_date = start_date
        this.end_date = end_date
        this.rooms_income = rooms_income
        this.restaurant_income = restaurant_income
        this.salaries = salaries
        this.orders = orders
        this.profit = profit
    }
    toEntity(): ProfitDoc{
        return {
            id: this.id,
            start_date: this.start_date,
            end_date: this.end_date,
            rooms_income: this.rooms_income,
            restaurant_income: this.restaurant_income,
            salaries: this.salaries,
            orders: this.orders,
            profit: this.profit,
        }
    }
}

export class DeliveryModel {
    id: number
    date: Date
    supplier: string

    constructor(id, date, supplier) {
        this.id = id
        this.date = date
        this.supplier = supplier
    }
    toEntity(): Delivery{
        return {
            id: this.id,
            date: this.date,
            supplier: this.supplier,
        }
    }
}

export class DeliveredProductModel {
    id: number
    delivery_id: number
    product_id: number
    count: number

    constructor(id, delivery_id, product_id, count) {
        this.id = id
        this.delivery_id = delivery_id
        this.product_id = product_id
        this.count = count
    }
    toEntity(): DeliveredProduct{
        return {
            id: this.id,
            delivery_id: this.delivery_id,
            product_id: this.product_id,
            count: this.count,

        }
    }
}

export class ProductModel {
    id: number
    name: string
    count: number

    constructor(id, name, count) {
        this.id = id
        this.name = name
        this.count = count
    }
    toEntity(): Product{
        return {
            id: this.id,
            name: this.name,
            count: this.count,

        }
    }
}

export class ProductInDishModel {
    id: number
    dish_id: number
    product_id: number
    count: number

    constructor(id, dish_id, product_id, count) {
        this.id = id
        this.dish_id = dish_id
        this.product_id = product_id
        this.count = count
    }
    toEntity(): ProductInDish{
        return {
            id: this.id,
            dish_id: this.dish_id,
            product_id: this.product_id,
            count: this.count,

        }
    }
}

export class DishModel {
    id: number
    name: string
    description: string
    price: number

    constructor(id, name, description, price) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
    }
    toEntity(): Dish{
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,

        }
    }
}

export class DishInOrderModel {
    id: number
    dish_id: number
    order_id: number
    count: number

    constructor(id, dish_id, order_id, count) {
        this.id = id
        this.dish_id = dish_id
        this.order_id = order_id
        this.count = count
    }
    toEntity(): DishInOrder{
        return {
            id: this.id,
            dish_id: this.dish_id,
            order_id: this.order_id,
            count: this.count,
        }
    }
}

export class MenuModel {
    id: number
    date: Date

    constructor(id, date) {
        this.id = id
        this.date = date
    }
    toEntity(): Menu{
        return {
            id: this.id,
            date: this.date,

        }
    }
}

export class DishInMenuModel {
    id: number
    dish_id: number
    menu_id: number
    constructor(id, dish_id, menu_id) {
        this.id = id
        this.dish_id = dish_id
        this.menu_id = menu_id
    }
    toEntity(): DishInMenu{
        return {
            id: this.id,
            dish_id: this.dish_id,
            menu_id: this.menu_id,

        }
    }
}

export class OrderModel {
    id: number
    table: number
    constructor(id, table) {
        this.id = id
        this.table = table
    }
    toEntity(): Order{
        return {
            id: this.id,
            table: this.table,
        }
    }
}



