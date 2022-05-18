import {Menu, Order, RentDoc} from "../../../logic/entity/docs";
import {Dish, Product} from "../../../logic/entity/products_info";
import {User} from "../../../logic/entity/user_info";
import {log} from "util";

const db = require('../db/db')

class HotelDao {

    async addDishToMenu(name: String) {

        const dish = await db.query('SELECT * FROM public."Dishes" WHERE name = $1', name)
        const menu = await db.query('SELECT * FROM public."Menu" WHERE date = $1', this.getCurrentDate())
        const result = await db.query('INSERT INTO public."DishInMenu" VALUES ($1, $2)', dish.id, menu.id)
    }

    async addToDish(dish: string, product: string) {
        const productData = await db.query('SELECT * FROM public."Products" WHERE name = $1', product)
        const dishData = await db.query('SELECT * FROM public."Dishes" WHERE name = $1', dish)
        const result = await db.query('INSERT INTO public."ProductInDish" VALUES ($1, $2, 1)', productData.id, dishData.id)
    }

    async addToOrder(table: number, dish: string) {
        const orderData = await db.query('SELECT * FROM public."Orders" WHERE table = $1', table)
        const dishData = await db.query('SELECT * FROM public."Dishes" WHERE name = $1', dish)
        const result = await db.query('INSERT INTO public."DishInOrder" VALUES ($1, $2, 1)', dishData.id, orderData.id, 1)
    }

    async addToStorage(product: string) {

    }

    async bookRoom(doc: RentDoc) {
        const result = await db.query('INSERT INTO public."RentDocs" VALUES ($1, $2, $3, $4)', doc.start_date, doc.end_date, doc.room.number, doc.client_id)
    }

    async createDish(name: string, description: string, price: number) {
        const result = await db.query('INSERT INTO public."Dishes" VALUES ($1, $2, $3)', name, description, price)
    }

    async createOrder(order: Order) {
        const result = await db.query('INSERT INTO public."Orders" VALUES ($1)', order.table)
    }

    async fire(name: string, reason: string) {
        const employee = await db.query('SELECT * FROM public."Users" WHERE name = $1', name)
        const result = await db.query('INSERT INTO public."Dismissals" VALUES ($1, $2, $3)', reason, this.getCurrentDate(), employee.id)
    }

    async getBookings(login: string): Promise<Array<RentDoc>> {
        const userCred = await db.query('SELECT * FROM public."Credentials" WHERE login = $1', login)
        const data = await db.query('SELECT * FROM public."RentDocs" WHERE client = $1', userCred.owner)

        const elems: Array<RentDoc> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {

            const room = await db.query('SELECT * FROM public."Rooms" WHERE number = $1', data.rows[i].room)
            elems[i] = {
                id: data.rows[i].id,
                start_date: data.rows[i].start_date,
                end_date: data.rows[i].end_date,
                room: {
                    number: room.number,
                    room_count: room.room_count,
                    type: room.type,
                    client_id: room.client_id
                },
                client_id: data.rows[i].client
            }

        }
        return elems
    }

    async getBookingsOfLastMonth(): Promise<Array<RentDoc>> {
        const data = await db.query('SELECT * FROM public."RentDocs"')

        return undefined;
    }


    async loginExists(login: string): Promise<boolean> {
        const data = await db.query('SELECT * FROM public."Credentials" WHERE login = $1', [login])
        return data.rows.length > 0;
    }

    async register(user: User) {
        const userResult = await db.query('INSERT INTO public."Users" VALUES ($1, $2, $3, $4, $5, $6, $7)', [0,user.mail, user.name, user.passport_number, user.passport_series, user.surname, user.role])
        const credResult = await db.query('INSERT INTO public."Credentials" VALUES ($1, $2, $3, $4)', [0,user.credentials.login, user.credentials.password, user.id])
    }

    async getPasswordHash(login: string): Promise<string> {

        const cred = await db.query('SELECT * FROM public."Credentials" WHERE login = $1', [login])
        return cred.rows[0].password_hash;
    }

    /* async getCleaningSchedule(date: string): Promise<CleaningSchedule> {
         const data = await db.query('SELECT * FROM public."CleaningSchedules" WHERE date = $1', date)
         return {
             id: data.id,
             date: data.date,
             closed: data.closed,
             days: {
                 day:,
                 responsible_id:,
                 cleaned:
             }
         };
     }*/

    async getProductsInDishById(id: number) {
        const productsInDish = await db.query('SELECT * FROM public."ProductInDish" WHERE dish = $1', id)
        const elems: Array<Product> = Array(productsInDish.rows.length)
        for (let i = 0; i < productsInDish.rows.length; i++) {
            const product = await db.query('SELECT * FROM public."Products" WHERE id = $1', productsInDish.rows[i].product)
            elems[i] = {
                id: product.id,
                name: product.name,
                count: product.count
            }
        }
        return elems
    }

    async getDish(name: string): Promise<Dish> {
        const dish = await db.query('SELECT * FROM public."Dishes" WHERE name = $1', name)
        const elems: Array<Product> = await this.getProductsInDishById(dish.id)
        return {
            id: dish.id,
            name: dish.name,
            description: dish.description,
            price: dish.price,
            products: elems
        };
    }

    async getMenu(date: string): Promise<Menu> {
        const menu = await db.query('SELECT * FROM public."Menus" WHERE date = $1', date)
        const dishesInMenu = await db.query('SELECT * FROM public."DishInMenu" WHERE menu = $1', menu.id)
        const elems: Array<Dish> = Array(dishesInMenu.rows.length)
        for (let i = 0; i < dishesInMenu.rows.length; i++) {
            const dish = await db.query('SELECT * FROM public."Dishes" WHERE id = $1', dishesInMenu.rows[i].dish)
            elems[i] = {
                id: dish.id,
                name: dish.name,
                description: dish.description,
                price: dish.price,
                products: await this.getProductsInDishById(dish.id)
            }
        }

        return {
            id: menu.id,
            date: menu.date,
            dishes: elems
        };
    }

    async getDishesInOrderById(id: number) {
        const dishesInOrder = await db.query('SELECT * FROM public."DishInOrder" WHERE order = $1', id)
        const dishes: Array<{
            name: string,
            count: number
        }> = Array(dishesInOrder.rows.length)
        for (let i = 0; i < dishesInOrder.rows.length; i++) {
            const dishDb = await db.query('SELECT * FROM public."Dishes" WHERE id = $1', dishesInOrder[i].dish)
            dishes[i] = {
                name: dishDb.name,
                count: dishesInOrder[i].count
            }
        }
        return dishes
    }

    async getOrders(): Promise<Array<Order>> {
        const orders = await db.query('SELECT * FROM public."Orders"')
        const ordersArr: Array<Order> = Array(orders.rows.length)

        for (let i = 0; i < orders.rows.length; i++) {

            ordersArr[i] = {
                id: orders[i].id,
                table: orders[i].table,
                dishes: await this.getDishesInOrderById(orders[i].id)
            }

        }

        return orders
    }


    getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + '/' + mm + '/' + dd;
    }

    getPreviousMonth() {
        const date = new Date();
        const prevMonth = date.getMonth() - 1;

        return new Date(date.getFullYear(), prevMonth);
    }

}


module.exports = new HotelDao()