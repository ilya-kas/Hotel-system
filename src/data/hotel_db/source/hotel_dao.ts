
import {
    CleaningScheduleModel,
    CredentialsModel, DeliveredProductModel, DeliveryModel, DishInMenuModel, DishInOrderModel, DishModel,
    DismissalModel, MenuModel, OrderModel, ProductInDishModel, ProductModel, ProfitDocModel, RecruitmentModel,
    RentDocModel,
    RoomCleaningModel, RoomLoadDocModel,
    RoomModel,
    UserModel
} from "./models";

const db = require('../db/db')

class HotelDao{

    async getUsers(): Promise<Array<UserModel>> {
        const data = await db.query('SELECT * FROM public."Users"')
        const users: Array<UserModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            users[i] = new UserModel(data.rows[i].id, data.rows[i].mail, data.rows[i].name, data.rows[i].surname, data.rows[i].passport_number, data.rows[i].passport_series, data.rows[i].role)
        }
        console.log(users)
        return users
    }

    async getRentDocs(): Promise<RentDocModel[]> {
        const data = await db.query('SELECT * FROM public."RentDocs"')
        const elems: Array<RentDocModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new RentDocModel(data.rows[i].id, data.rows[i].start_date, data.rows[i].end_date, data.rows[i].room_id, data.rows[i].client_id)
        }
        return elems
    }
    async getRooms(): Promise<RoomModel[]> {
        const data = await db.query('SELECT * FROM public."Rooms"')
        const elems: Array<RoomModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new RoomModel(data.rows[i].number, data.rows[i].room_count, data.rows[i].type, data.rows[i].client_id)
        }
        return elems
    }
    async getCleaningSchedules(): Promise<CleaningScheduleModel[]> {
        const data = await db.query('SELECT * FROM public."CleaningSchedules"')
        const elems: Array<CleaningScheduleModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new CleaningScheduleModel(data.rows[i].id, data.rows[i].date, data.rows[i].closed)
        }
        return elems
    }
    async getCredentials(): Promise<CredentialsModel[]> {
        const data = await db.query('SELECT * FROM public."Credentials"')
        const elems: Array<CredentialsModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new CredentialsModel(data.rows[i].owner, data.rows[i].login, data.rows[i].password_hash)
        }
        return elems
    }
    async getRoomCleanings(): Promise<RoomCleaningModel[]> {
        const data = await db.query('SELECT * FROM public."RoomCleanings"')
        const elems: Array<RoomCleaningModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new RoomCleaningModel(data.rows[i].id, data.rows[i].cleaned, data.rows[i].room_id, data.rows[i].responsible_id,data.rows[i].schedule_id)
        }
        return elems
    }
    async getDismissals(): Promise<DismissalModel[]> {
        const data = await db.query('SELECT * FROM public."Dismissals"')
        const elems: Array<DismissalModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new DismissalModel(data.rows[i].id, data.rows[i].reason, data.rows[i].date, data.rows[i].employee_id)
        }
        return elems
    }
    async getRecruitments(): Promise<RecruitmentModel[]> {
        const data = await db.query('SELECT * FROM public."Recruitments"')
        const elems: Array<RecruitmentModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new RecruitmentModel(data.rows[i].id, data.rows[i].begin_date, data.rows[i].end_date, data.rows[i].role,data.rows[i].salary,data.rows[i].employee_id)
        }
        return elems
    }
    async getRoomsLoadDocs(): Promise<RoomLoadDocModel[]> {
        const data = await db.query('SELECT * FROM public."RoomsLoadDocs"')
        const elems: Array<RoomLoadDocModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new RoomLoadDocModel(data.rows[i].id, data.rows[i].start_date, data.rows[i].end_date, data.rows[i].stat/*JSON.parse(data.rows[i].stat)*/)
        }
        return elems
    }
    async getDeliveries(): Promise<DeliveryModel[]> {
        const data = await db.query('SELECT * FROM public."Deliveries"')
        const elems: Array<DeliveryModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new DeliveryModel(data.rows[i].id, data.rows[i].date, data.rows[i].supplier)
        }
        return elems
    }
    async getDeliveredProduct(): Promise<DeliveredProductModel[]> {
        const data = await db.query('SELECT * FROM public."DeliveredProduct"')
        const elems: Array<DeliveredProductModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new DeliveredProductModel(data.rows[i].id, data.rows[i].delivery_id, data.rows[i].product_id, data.rows[i].count)
        }
        return elems
    }
    async getProfitDocs(): Promise<ProfitDocModel[]> {
        const data = await db.query('SELECT * FROM public."ProfitDocs"')
        const elems: Array<ProfitDocModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new ProfitDocModel(data.rows[i].id, data.rows[i].start_date, data.rows[i].end_date, data.rows[i].rooms_income, data.rows[i].restaurant_income, data.rows[i].salaries, data.rows[i].orders, data.rows[i].profit)
        }
        return elems
    }
    async getProducts(): Promise<ProductModel[]> {
        const data = await db.query('SELECT * FROM public."Products"')
        const elems: Array<ProductModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new ProductModel(data.rows[i].id, data.rows[i].name, data.rows[i].count)
        }
        return elems
    }
    async getDishes(): Promise<DishModel[]> {
        const data = await db.query('SELECT * FROM public."Dishes"')
        const elems: Array<DishModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new DishModel(data.rows[i].id, data.rows[i].name, data.rows[i].description, data.rows[i].price)
        }
        return elems
    }
    async getMenu(): Promise<MenuModel[]> {
        const data = await db.query('SELECT * FROM public."Menu"')
        const elems: Array<MenuModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new MenuModel(data.rows[i].id, data.rows[i].date)
        }
        return elems
    }
    async getProductInDish(): Promise<ProductInDishModel[]> {
        const data = await db.query('SELECT * FROM public."ProductInDish"')
        const elems: Array<ProductInDishModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new ProductInDishModel(data.rows[i].id, data.rows[i].dish_id, data.rows[i].product_id, data.rows[i].count)
        }
        return elems
    }
    async getDishInOrder(): Promise<DishInOrderModel[]> {
        const data = await db.query('SELECT * FROM public."DishInOrder"')
        const elems: Array<DishInOrderModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new DishInOrderModel(data.rows[i].id, data.rows[i].dish_id, data.rows[i].order_id, data.rows[i].count)
        }
        return elems
    }
    async getDishInMenu(): Promise<DishInMenuModel[]> {
        const data = await db.query('SELECT * FROM public."DishInMenu"')
        const elems: Array<DishInMenuModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new DishInMenuModel(data.rows[i].id, data.rows[i].dish, data.rows[i].menu)
        }
        return elems
    }
    async getOrders(): Promise<OrderModel[]> {
        const data = await db.query('SELECT * FROM public."Orders"')
        const elems: Array<OrderModel> = Array(data.rows.length)
        for (let i = 0; i < data.rows.length; i++) {
            elems[i] = new OrderModel(data.rows[i].id, data.rows[i].table)
        }
        return elems
    }

}

module.exports = new HotelDao()