export interface RoomFilters{
    dateStart: string
    dateEnd: string
    type:{
        cheap: boolean
        regular: boolean
        vip: boolean
    }
}