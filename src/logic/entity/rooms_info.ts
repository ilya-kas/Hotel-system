export interface Room {
    number: number
    room_count: number
    type: number
    client_id: number
}

export interface RoomCleaning {
    id: number
    cleaned: boolean
    room_id: number
    responsible_id: number
    schedule_id: number
}