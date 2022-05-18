// @ts-ignore
import * as express from 'express'
import {bookARoom, getFilteredRooms, getRoomData} from "../logic/use_case/rooms_use_cases";

export const roomsRouter = express.Router()

roomsRouter.get('/all', (request, response) => {
    let filters = {
        dateStart: request.body.dateStart,
        dateEnd: request.body.dateEnd,
        type: {
            cheap: request.body.filters.cheap,
            regular: request.body.filters.regular,
            vip: request.body.filters.vip
        }
    }
    getFilteredRooms(filters).then((res) => {
        let error = ""
        if (res == null)
            error = "Wrong dates"
        response.send({
            rooms: res,
            error: error
        })
    })
})

roomsRouter.get('/room', (request, response) => {
    getRoomData(request.body.number).then((res) => {
        let error = ""
        if (res == null)
            error = "Wrong dates"
        response.send({
            number: res.number,
            rooms_count: res.room_count,
            type: res.type.toString().toLowerCase(),
            price: res.type.valueOf(),
            error: error
        })
    })
})

roomsRouter.post('/book', (request, response) => {
    bookARoom(request.body.login, request.body.token, request.body.number, request.body.start_date,
        request.body.end_date, request.body.card_num,request.body.pin).then((res) => {
        response.send({
            error: res
        })
    })
})