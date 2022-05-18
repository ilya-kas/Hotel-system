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
import {User, Role, Worker} from "../../../logic/entity/user_info";
import {Dish, Product} from "../../../logic/entity/products_info";

import {IHotelRepository} from "./repo_interfaces"

const dao = require('../source/hotel_dao')


export class HotelRepository implements IHotelRepository{

    addDishToMenu(name: string) {
        dao.addDishToMenu(name)
    }

    addToDish(dish: string, product: string) {
        dao.addToDish(dish, product)
    }

    addToOrder(table: number, dish: string) {
        dao.addToOrder(table, dish)
    }

    addToStorage(product: string) {

    }

    bookRoom(doc: RentDoc) {
        dao.bookRoom(doc)
    }

    createDish(name: string, description: string, price: number){
        dao.createDish(name)
    }

    createOrder(order: Order) {
        dao.createOrder(order)
    }

    fire(name: string, reason: string) {
        dao.fire(name, reason)
    }

    getBookings(login: string): Array<RentDoc> {
        return dao.getBookings(login);
    }

    getBookingsOfLastMonth(): Array<RentDoc> {

        return undefined;
    }

    getCleaningSchedule(date: string): CleaningSchedule {

        return undefined;
    }

    getDish(name: string): Dish {
        return dao.getDish(name);
    }

    getMenu(date: string): Menu {
        return dao.getMenu(date);
    }

    getOrders(): Array<Order> {
        return dao.getOrders();
    }

    getOrdersOfLastMonth(): Array<Order> {

        return undefined;
    }

    getPasswordHash(login: string): string {
        return dao.getPasswordHash(login);
    }

    getPersonal(): Array<Worker> {

        return undefined;
    }

    getSuppliesOfLastMonth(): Array<Delivery> {

        return undefined;
    }

    getUser(login: string): User {

        return undefined;
    }

    getUserRole(login: string): Role {

        return undefined;
    }

    hire(login: string, user: User) {

    }

    loadStorage(): Array<Product> {

        return undefined;
    }

    loginExists(login: string): boolean {
        return dao.loginExists(login);
    }

    register(user: User) {
        dao.register(user)
    }

    removeDishFromMenu(name: string) {
    }

    removeFromDish(dish: string, product: string) {
    }

    removeFromOrder(table: number, dish: string) {
    }

    removeFromStorage(product: string) {
    }

    submitOrder(table: number) {
    }

    updateDayInSchedule(date: string, status: boolean) {
    }

    updatePersonalInfo(user: User) {

    }

    saveBookedByTypesDoc(doc: RoomLoadDoc) {
    }

    /*
    async getUsers(): Promise<Array<User>> {
        const userModels = await dao.getUsers()
        const entities : Array<User> = Array(userModels.length)
        for (let i = 0; i < userModels.length; i++) {
          entities[i] = userModels[i].toEntity()
        }
        return entities;
    }*/

}