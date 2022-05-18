// @ts-ignore
import * as express from 'express'
import {getSchedule, updateDay} from "../logic/use_case/cleaning_use_cases";

export const cleaningRouter = express.Router()

cleaningRouter.get('/schedule', (request, response) => {
    getSchedule(request.body.login, request.body.token, request.body.month).then((res) => {
        let error = ""
        if (res.error != undefined)
            error = res.error
        response.send({
            schedule: res,
            error: error
        })
    })
})

cleaningRouter.post('/update_day', (request, response) => {
    updateDay(request.body.login, request.body.token, request.body.month, request.body.day, request.body.status).then(res => {
        response.send({
            error: res
        })
    })
})