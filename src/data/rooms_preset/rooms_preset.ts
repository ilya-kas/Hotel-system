import {Room, RoomType} from "../../logic/entity/rooms_info";

export const ROOMS_COUNT = 500

export let rooms: Array<Room> = []
for (let i=1;i<ROOMS_COUNT;i++)
    rooms.push({
        client_id: -1,
        number: i,
        room_count: Math.round(Math.random()*3),
        type: RoomType.CHEAP
    })
for (let i=ROOMS_COUNT-200;i<ROOMS_COUNT-100;i++)
    rooms[i].type = RoomType.REGULAR
for (let i=ROOMS_COUNT-100;i<ROOMS_COUNT;i++)
    rooms[i].type = RoomType.VIP