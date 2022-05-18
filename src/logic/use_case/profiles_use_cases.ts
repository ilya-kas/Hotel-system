import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {Role, User} from "../entity/user_info";
import {checkToken} from "./auth_use_cases";
import {getCurrentDate} from "./rooms_use_cases";

let repo = new HotelRepository()

export async function getUserProfile(login: string, token: number): Promise<any>{
    let correctCredentials = await checkToken(login, token)
    if (!correctCredentials) return { error: "Wrong credentials"}

    let user = await repo.getUser(login)
    if (user.role != Role.USER) return { error: "Person must be a regular user"}
    let allBookings = await repo.getBookings(login)
    let currentBookings = allBookings.filter(value => value.end_date>getCurrentDate())

    let result = {
        user: {
            mail: user.mail,
            name: user.name,
            series: user.passport_series,
            number: user.passport_number
        },
        rooms: []
    }
    currentBookings.forEach(value => result.rooms.push({
        number: value.room.number,
        type: value.room.type
    }))

    return result
}

export async function getCleanersProfile(login: string, token: number): Promise<any>{
    let correctCredentials = await checkToken(login, token)
    if (!correctCredentials) return { error: "Wrong credentials"}

    let user = await repo.getUser(login)
    if (user.role != Role.CLEANER) return { error: "Person must be cleaner"}
    let schedule = repo.getCleaningSchedule(getCurrentDate().substring(3))

    let result = {
        user: {
            mail: user.mail,
            name: user.name,
            series: user.passport_series,
            number: user.passport_number
        },
        schedule: []
    }
    schedule.days.forEach(value => {
        if (value.responsible_id == user.id)
            result.schedule.push({
                date: value.day,
                cleaned: value.cleaned
            })
    })

    return result
}

export async function getChefsProfile(login: string, token: number): Promise<any>{
    let correctCredentials = await checkToken(login, token)
    if (!correctCredentials) return { error: "Wrong credentials"}

    let user = await repo.getUser(login)
    if (user.role != Role.CHEF && user.role != Role.WAITER) return { error: "Person must be a chef"}

    return {
        user: {
            mail: user.mail,
            name: user.name,
            series: user.passport_series,
            number: user.passport_number
        }
    }
}

export async function updatePersonalInfo(login: string, token: number, info: User): Promise<string>{
    let correctCredentials = await checkToken(login, token)
    if (!correctCredentials) return "Wrong credentials"

    let user = await repo.getUser(login)
    user.mail = info.mail
    user.name = info.name
    user.surname = info.surname
    user.passport_number = info.passport_number
    user.passport_series = info.passport_series
    await repo.updatePersonalInfo(user)

    return ""
}

export async function getUserStats(login: string, token: number, user_login: string): Promise<any>{
    let correctCredentials = await checkToken(login, token)
    if (!correctCredentials) return { error: "Wrong credentials"}

    let manager = await repo.getUser(login)
    if (manager.role != Role.MANAGER) return { error: "Person must be a manager"}
    let user = await repo.getUser(user_login)
    let allBookings = await repo.getBookings(user_login)

    let result = {
        user: {
            mail: user.mail,
            name: user.name,
            series: user.passport_series,
            number: user.passport_number
        },
        rooms: []
    }
    allBookings.forEach(value => result.rooms.push({
        number: value.room.number,
        type: value.room.type,
        dateStart: value.start_date,
        dateEnd: value.end_date
    }))

    return result
}