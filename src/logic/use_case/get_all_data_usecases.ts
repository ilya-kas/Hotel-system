import {
    CleaningSchedule,
    Delivery,
    Dismissal, Menu,
    Order,
    ProfitDoc,
    Recruitment,
    RentDoc,
    RoomLoadDoc
} from "../entity/docs";
import {Room, RoomCleaning} from "../entity/rooms_info";
import {Credentials, User} from "../entity/user_info";
import {DeliveredProduct, DishInMenu, DishInOrder, ProductInDish} from "../entity/others";
import {Dish, Product} from "../entity/products_info";
import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository"

let repo = new HotelRepository()

export async function getRentDocs(): Promise<Array<RentDoc>>{
    return await repo.getRentDocs()
}

export async function getRooms(): Promise<Array<Room>>{
    return await repo.getRooms()
}

export async function getCleaningSchedules(): Promise<Array<CleaningSchedule>>{
    return await repo.getCleaningSchedules()
}

export async function getCredentials(): Promise<Array<Credentials>>{
    return await repo.getCredentials()
}

export async function getUsers(): Promise<Array<User>>{
    return await repo.getUsers()
}

export async function getRoomCleanings(): Promise<Array<RoomCleaning>>{
    return await repo.getRoomCleanings()
}

export async function getDismissals(): Promise<Array<Dismissal>>{
    return await repo.getDismissals()
}

export async function getRecruitments(): Promise<Array<Recruitment>>{
    return await repo.getRecruitments()
}

export async function getRoomsLoadDocs(): Promise<Array<RoomLoadDoc>>{
    return await repo.getRoomsLoadDocs()
}

export async function getDeliveries(): Promise<Array<Delivery>>{
    return await repo.getDeliveries()
}

export async function getDeliveredProduct(): Promise<Array<DeliveredProduct>>{
    return await repo.getDeliveredProduct()
}

export async function getProfitDocs(): Promise<Array<ProfitDoc>>{
    return await repo.getProfitDocs()
}

export async function getProducts(): Promise<Array<Product>>{
    return await repo.getProducts()
}

export async function getDishes(): Promise<Array<Dish>>{
    return await repo.getDishes()
}

export async function getMenu(): Promise<Array<Menu>>{
    return await repo.getMenu()
}

export async function getProductInDish(): Promise<Array<ProductInDish>>{
    return await repo.getProductInDish()
}

export async function getDishInOrder(): Promise<Array<DishInOrder>>{
    return await repo.getDishInOrder()
}

export async function getDishInMenu(): Promise<Array<DishInMenu>>{
    return await repo.getDishInMenu()
}

export async function getOrders(): Promise<Array<Order>>{
    return await repo.getOrders()
}
