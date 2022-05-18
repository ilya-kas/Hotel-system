import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {checkToken} from "./auth_use_cases";
import {Role} from "../entity/user_info";

let repo = new HotelRepository()

export async function getMenu(login: string, token: number, date: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER && user.role != Role.CHEF && user.role != Role.WAITER) return { error: "Wrong user role" }

    let menu = await repo.getMenu(date)
    let res = {
        dishes: [],
        error: ""
    }
    menu.dishes.forEach(value => res.dishes.push({
        name: value.name,
        price: value.price
    }))

    return res
}

export async function getDish(login: string, token: number, name: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER && user.role != Role.CHEF && user.role != Role.WAITER) return { error: "Wrong user role" }

    let dish = await repo.getDish(name)
    let res = {
        products: [],
        error: ""
    }
    dish.products.forEach(value => res.dishes.push({
        name: value.name,
        count: value.count
    }))

    return res
}

export async function createDish(login: string, token: number, name: string, description: string, price: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CHEF) return { error: "Wrong user role" }

    await repo.createDish(name, description, price)

    return { error: "" }
}

export async function addDishToMenu(login: string, token: number, name: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CHEF) return { error: "Wrong user role" }

    await repo.addDishToMenu(name)

    return { error: "" }
}

export async function removeDish(login: string, token: number, name: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CHEF) return { error: "Wrong user role" }

    await repo.removeDishFromMenu(name)

    return { error: "" }
}

export async function addToDish(login: string, token: number, dish: string, product): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CHEF) return { error: "Wrong user role" }

    await repo.addToDish(dish, product)

    return { error: "" }
}

export async function removeFromDish(login: string, token: number, dish: string, product): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CHEF) return { error: "Wrong user role" }

    await repo.removeFromDish(dish, product)

    return { error: "" }
}