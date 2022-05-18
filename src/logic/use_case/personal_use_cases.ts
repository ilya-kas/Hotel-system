import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {checkToken} from "./auth_use_cases";
import {Role, User} from "../entity/user_info";
import {RoomType} from "../entity/rooms_info";
import {ROOMS_COUNT} from "../../data/rooms_preset/rooms_preset";
import {getCurrentDate} from "./rooms_use_cases";

let repo = new HotelRepository()

export async function getPersonal(login: string, token: number): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    let res = {
        personal: [],
        error: ""
    }
    let personal = repo.getPersonal()
    personal.forEach(value => res.personal.push({
        name: value.surname+" "+value.name,
        email: value.mail,
        role: value.role.toString().toLowerCase()
    }))

    return res
}

export async function fire(login: string, token: number, name: string, reason: string): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    await repo.fire(name, reason)

    return {error: ""}
}

export async function hire(login: string, token: number, new_login: string, newbie: User): Promise<any>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return { error: loginCheckRes }
    let user = await repo.getUser(login)
    if (user.role != Role.MANAGER) return { error: "Wrong user role" }

    await repo.hire(new_login, newbie)

    return {password: "qwerty"}
}