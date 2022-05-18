export interface Room {
    number: number
    room_count: number
    type: RoomType
    client_id: number
}

export enum RoomType{
    CHEAP = 100, //цена
    REGULAR = 200,
    VIP = 300
}