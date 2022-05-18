import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {checkToken} from "./auth_use_cases";
import {Role} from "../entity/user_info";
import {Order} from "../entity/docs";

let repo = new HotelRepository()

export async function getOrders(login: string, token: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CHEF && user.role != Role.WAITER) return { error: "Wrong user role" }

    let orders = await repo.getOrders()
    let res = {
        orders: [],
        error: ""
    }
    orders.forEach(value => {
        let orderedDishes = []
        value.dishes.forEach(value1 => orderedDishes.push({
            name: value1.name,
            count: value1.count
        }))
        res.dishes.push({
            table: value.table,
            dishes: orderedDishes
        })
    })

    return res
}

export async function createOrder(login: string, token: number, order: Order): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.WAITER) return { error: "Wrong user role" }

    await repo.createOrder(order)

    return { error: "" }
}

export async function addToOrder(login: string, token: number, table: number, name: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.WAITER) return { error: "Wrong user role" }

    await repo.addToOrder(table, name)

    return { error: "" }
}

export async function removeFromOrder(login: string, token: number, table: number, name: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.WAITER) return { error: "Wrong user role" }

    await repo.removeFromOrder(table, name)

    return { error: "" }
}

export async function submitOrder(login: string, token: number, table: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.WAITER) return { error: "Wrong user role" }

    await repo.submitOrder(table)

    return { error: "" }
}