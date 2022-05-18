import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {checkToken} from "./auth_use_cases";
import {Role} from "../entity/user_info";
import {RoomType} from "../entity/rooms_info";
import {ROOMS_COUNT} from "../../data/rooms_preset/rooms_preset";
import {getCurrentDate} from "./rooms_use_cases";

let repo = new HotelRepository()

function getDays(begin: string, end: string): number{
    let b = parseInt(begin.split(".")[0])
    if (begin.split(".")[1] < getCurrentDate().split(".")[1])
        b = 1
    let e = parseInt(end.split(".")[0])
    if (end.split(".")[1] > getCurrentDate().split(".")[1])
        e = 31
    return e - b + 1
}

export async function bookedByTypesReport(login: string, token: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    let rents = repo.getBookingsOfLastMonth()
    let taken = 0
    let cheap = 0
    let normal = 0
    let vip = 0
    rents.forEach(value => {
        let days = getDays(value.start_date, value.end_date)
        taken += days
        if (value.room.type == RoomType.CHEAP)
            cheap += days
        if (value.room.type == RoomType.REGULAR)
            normal += days
        if (value.room.type == RoomType.VIP)
            vip += days
    })

    await repo.saveBookedByTypesDoc({
        id: undefined,
        free: ROOMS_COUNT-taken,
        taken: taken,
        stats: {
            cheap: cheap,
            normal: normal,
            vip: vip
        }
    })

    return {
        free: ROOMS_COUNT-taken,
        taken: taken,
        by_types: {
            cheap: cheap,
            normal: normal,
            vip: vip
        },
        error: ""
    }
}

export async function incomeDoc(login: string, token: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    let rents = await repo.getBookingsOfLastMonth()
    let roomsIncome = 0
    rents.forEach(value => {
        let days = getDays(value.start_date, value.end_date)
        roomsIncome += days * value.room.type
    })
    let orders = await repo.getOrders()
    let ordersIncome = 0
    orders.forEach(value => ordersIncome += value.price)
    let deliveries = await repo.getSuppliesOfLastMonth()
    let deliveriesPrice = 0
    deliveries.forEach(value => deliveriesPrice += value.sum)
    let workers = 0
    let personal = repo.getPersonal()
    personal.forEach(value => workers + value.salary)

    return {
        rooms_income: roomsIncome,
        restaurant_income: ordersIncome,
        products: deliveriesPrice,
        salaries: workers,
        income: roomsIncome + ordersIncome - deliveriesPrice - workers,
        error: ""
    }
}