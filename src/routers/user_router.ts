// @ts-ignore
import * as express from 'express'
import {
    getChefsProfile,
    getCleanersProfile,
    getUserProfile, getUserStats,
    updatePersonalInfo
} from "../logic/use_case/profiles_use_cases";

export const userRouter = express.Router()

userRouter.get('/regular', (request, response) => {
    getUserProfile(request.body.login, request.body.token).then((res) => {
        let error = ""
        if (res.error != undefined)
            error = res.error
        response.send({
            user: res.user,
            rooms: res.rooms,
            error: error
        })
    })
})

userRouter.get('/cleaner', (request, response) => {
    getCleanersProfile(request.body.login, request.body.token).then(res => {
        let error = ""
        if (res.error != undefined)
            error = res.error
        response.send({
            user: res.user,
            schedule: res.schedule,
            error: error
        })
    })
})

userRouter.get('/chef', (request, response) => {
    getChefsProfile(request.body.login, request.body.token).then(res => {
        let error = ""
        if (res.error != undefined)
            error = res.error
        response.send({
            user: res.user,
            error: error
        })
    })
})

userRouter.post('/update_personal', (request, response) => {
    let user = {
        id: undefined,
        mail: request.body.mail,
        name: request.body.fullName.split(" ")[1],
        surname: request.body.fullName.split(" ")[0],
        passport_number: request.body.passport_number,
        passport_series: request.body.passport_series,
        role: undefined,
        credentials: undefined
    }
    updatePersonalInfo(request.body.login, request.body.token, user).then(res => {
        response.send({
            error: res
        })
    })
})

userRouter.get('/info', (request, response) => {
    getUserStats(request.body.login, request.body.token, request.body.user_login).then(res => {
        let error = ""
        if (res.error != undefined)
            error = res.error
        response.send({
            user: res.user,
            rooms: res.rooms,
            error: error
        })
    })
})