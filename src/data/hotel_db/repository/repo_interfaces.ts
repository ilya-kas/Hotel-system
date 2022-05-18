import {Role, User, Worker} from "../../../logic/entity/user_info";
import {CleaningSchedule, Delivery, Menu, Order, RentDoc, RoomLoadDoc} from "../../../logic/entity/docs";
import {Dish, Product} from "../../../logic/entity/products_info";

export interface IHotelRepository{
    loginExists(login: string): boolean
    getPasswordHash(login: string): string
    register(user: User)
    getUserRole(login: string): Role
    getUser(login: string): User
    updatePersonalInfo(user: User)

    getCleaningSchedule(month: string): CleaningSchedule
    updateDayInSchedule(date: string, status: boolean)

    getMenu(date: string): Menu
    getDish(name: string): Dish
    createDish(name: string, description: string, price: number)
    addDishToMenu(name: string) //name - Название блюда, дата меню - сегодняшний день
    removeDishFromMenu(name: string) //name - Название блюда, дата меню - сегодняшний день
    addToDish(dish: string, product: string)
    removeFromDish(dish: string, product: string)

    getOrders(): Array<Order> //только те, которые на сегодняшний день и не выполненные
    createOrder(order: Order)
    addToOrder(table: number, dish: string)
    removeFromOrder(table: number, dish: string)
    submitOrder(table: number)

    getPersonal(): Array<Worker> //все пользователи, чья роль - не USER
    hire(login: string, user: User)
    fire(name: string, reason: string)

    bookRoom(doc: RentDoc)
    getBookings(login: string):Array<RentDoc> //аренда человеком за всё всемя
    getBookingsOfLastMonth():Array<RentDoc> //за последний месяц
    getOrdersOfLastMonth(): Array<Order> //без сегоднешних неподтверждённых
    getSuppliesOfLastMonth(): Array<Delivery>

    loadStorage(): Array<Product> //продукты на складе
    addToStorage(product: string)
    removeFromStorage(product: string)

    saveBookedByTypesDoc(doc: RoomLoadDoc)
}