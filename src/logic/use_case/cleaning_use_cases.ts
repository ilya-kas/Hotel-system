import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {checkToken} from "./auth_use_cases";
import {Role} from "../entity/user_info";

let repo = new HotelRepository()

export async function getSchedule(login: string, token: number, month: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.CLEANER && user.role != Role.MANAGER) return { error: "Wrong user role" }

    let schedule = await repo.getCleaningSchedule(month)
    let result = []
    if (user.role == Role.CLEANER)
        schedule.days.filter(value => value.responsible_id==user.id)
            .forEach(value => result.push({
                date: value.day,
                cleaned: value.cleaned
            }))
    else
        schedule.days.forEach(value => result.push({
            date: value.day,
            cleaned: value.cleaned
        }))

    return result
}

export async function updateDay(login: string, token: number, month: string, day: number, status: boolean): Promise<string>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return loginCheckRes
    let user = await repo.getUser(login)
    if (user.role != Role.CLEANER && user.role != Role.MANAGER) return "Wrong user role"

    await repo.updateDayInSchedule(day+"."+month, status)

    return ""
}