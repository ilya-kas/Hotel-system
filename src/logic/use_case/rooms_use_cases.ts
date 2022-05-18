import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {RoomFilters} from "../entity/others";
import {Room, RoomType} from "../entity/rooms_info";
import {rooms, ROOMS_COUNT} from "../../data/rooms_preset/rooms_preset";
import {checkToken} from "./auth_use_cases";

let repo = new HotelRepository()

export function getCurrentDate(): string{
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    let yyyy = today.getFullYear()

    return mm + '/' + dd + '/' + yyyy
}

export async function getFilteredRooms(filters: RoomFilters): Promise<Array<number>>{
    if (filters.dateStart>filters.dateEnd) return null
    let rentDocs = repo.getBookingsOfLastMonth()
    let rented = Array<number>()
    rentDocs.forEach((value) => {
        if (value.start_date<=filters.dateEnd &&
            value.end_date>=filters.dateStart)
            if ((filters.type.cheap && value.room.type == RoomType.CHEAP) ||
                (filters.type.regular && value.room.type == RoomType.REGULAR) ||
                (filters.type.vip && value.room.type == RoomType.VIP))
                rented.push(value.room.number)
    })
    let filtered = Array<number>()
    let p = 0
    for (let i=1; i<ROOMS_COUNT; i++){
        while (p<rented.length && rented[p]<i)
            p++
        if (p<rented.length && rented[p]==i) continue
        if ((filters.type.cheap && rooms[i].type == RoomType.CHEAP) ||
            (filters.type.regular && rooms[i].type == RoomType.REGULAR) ||
            (filters.type.vip && rooms[i].type == RoomType.VIP))
            filtered.push(i)
    }
    return filtered
}

export async function getRoomData(number: number): Promise<Room>{
    if (number<1 || number>=ROOMS_COUNT) return null
    return rooms[number]
}

export async function bookARoom(login: string, token: number, number: number, start_date: string, end_date: string, card_num: string, pin: number): Promise<string>{
    let loginCheckRes = await checkToken(login, token)
    if (loginCheckRes != "") return loginCheckRes
    if (start_date>end_date) return "Wrong period"
    if (start_date<getCurrentDate()) return "Wrong period"
    if (number<1 || number>=ROOMS_COUNT) return "Wrong room number"

    let freeRooms = await getFilteredRooms({
        dateEnd: start_date,
        dateStart: end_date,
        type: {
            cheap: true,
            regular: true,
            vip: true
        }
    })
    let busy = true
    freeRooms.forEach((value) => {
        if (value==number){
            busy = false
            return
        }
    })
    if (busy) return "This room is taken"

    let user = await repo.getUser(login)
    await repo.bookRoom({
        client_id: user.id,
        id: -1,
        room: rooms[number],
        end_date: end_date,
        start_date: start_date
    })
    return ""
}