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

const dao = require('../source/hotel_dao')

interface IAllRepository{
    getRentDocs(): Promise<Array<RentDoc>>
    getRooms(): Promise<Array<Room>>
    getCleaningSchedules(): Promise<Array<CleaningSchedule>>
    getCredentials(): Promise<Array<Credentials>>
    getUsers(): Promise<Array<User>>
    getRoomCleanings(): Promise<Array<RoomCleaning>>
    getDismissals(): Promise<Array<Dismissal>>
    getRecruitments(): Promise<Array<Recruitment>>
    getRoomsLoadDocs(): Promise<Array<RoomLoadDoc>>
    getDeliveries(): Promise<Array<Delivery>>
    getDeliveredProduct(): Promise<Array<DeliveredProduct>>
    getProfitDocs(): Promise<Array<ProfitDoc>>
    getProducts(): Promise<Array<Product>>
    getDishes(): Promise<Array<Dish>>
    getMenu(): Promise<Array<Menu>>
    getProductInDish(): Promise<Array<ProductInDish>>
    getDishInOrder(): Promise<Array<DishInOrder>>
    getDishInMenu(): Promise<Array<DishInMenu>>
    getOrders(): Promise<Array<Order>>
}

export class HotelRepository implements IAllRepository{
    async getRentDocs(): Promise<RentDoc[]> {
        const models = await dao.getRentDocs()
        const entities : Array<RentDoc> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
          entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getRooms(): Promise<Room[]> {
        const models = await dao.getRooms()
        const entities : Array<Room> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getCleaningSchedules(): Promise<CleaningSchedule[]> {
        const models = await dao.getCleaningSchedules()
        const entities : Array<CleaningSchedule> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getCredentials(): Promise<Credentials[]> {
        const models = await dao.getCredentials()
        const entities : Array<Credentials> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getRoomCleanings(): Promise<RoomCleaning[]> {
        const models = await dao.getRoomCleanings()
        const entities : Array<RoomCleaning> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getDismissals(): Promise<Dismissal[]> {
        const models = await dao.getDismissals()
        const entities : Array<Dismissal> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getRecruitments(): Promise<Recruitment[]> {
        const models = await dao.getRecruitments()
        const entities : Array<Recruitment> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getRoomsLoadDocs(): Promise<RoomLoadDoc[]> {
        const models = await dao.getRoomsLoadDocs()
        const entities : Array<RoomLoadDoc> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getDeliveries(): Promise<Delivery[]> {
        const models = await dao.getDeliveries()
        const entities : Array<Delivery> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getDeliveredProduct(): Promise<DeliveredProduct[]> {
        const models = await dao.getDeliveredProduct()
        const entities : Array<DeliveredProduct> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getProfitDocs(): Promise<ProfitDoc[]> {
        const models = await dao.getProfitDocs()
        const entities : Array<ProfitDoc> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getProducts(): Promise<Product[]> {
        const models = await dao.getProducts()
        const entities : Array<Product> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getDishes(): Promise<Dish[]> {
        const models = await dao.getDishes()
        const entities : Array<Dish> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getMenu(): Promise<Menu[]> {
        const models = await dao.getMenu()
        const entities : Array<Menu> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getProductInDish(): Promise<ProductInDish[]> {
        const models = await dao.getProductInDish()
        const entities : Array<ProductInDish> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getDishInOrder(): Promise<DishInOrder[]> {
        const models = await dao.getDishInOrder()
        const entities : Array<DishInOrder> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getDishInMenu(): Promise<DishInMenu[]> {
        const models = await dao.getDishInMenu()
        const entities : Array<DishInMenu> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }
    async getOrders(): Promise<Order[]> {
        const models = await dao.getOrders()
        const entities : Array<Order> = Array(models.length)
        for (let i = 0; i < models.length; i++) {
            entities[i] = models[i].toEntity()
        }
        return entities;
    }

    async getUsers(): Promise<Array<User>> {
        const userModels = await dao.getUsers()
        const entities : Array<User> = Array(userModels.length)
        for (let i = 0; i < userModels.length; i++) {
          entities[i] = userModels[i].toEntity()
        }
        return entities;
    }

}