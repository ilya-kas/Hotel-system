import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {RoomFilters} from "../entity/others";
import {Room, RoomType} from "../entity/rooms_info";
import {rooms, ROOMS_COUNT} from "../../data/rooms_preset/rooms_preset";
import {checkToken} from "./auth_use_cases";
import {Role} from "../entity/user_info";

let repo = new HotelRepository()

export async function getProducts(login: string, token: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    let products = await repo.loadStorage()
    let res = {
        products: [],
        error: ""
    }
    products.forEach(value => res.products.push({
        name: value.name,
        count: value.count
    }))

    return res
}

export async function addProductToStorage(login: string, token: number, product: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    await repo.addToStorage(product)

    return { error: "" }
}

export async function removeProductFromStorage(login: string, token: number, product: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    await repo.removeFromStorage(product)

    return { error: "" }
}