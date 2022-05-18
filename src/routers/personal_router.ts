// @ts-ignore
import * as express from 'express'
import {fire, getPersonal, hire} from "../logic/use_case/personal_use_cases";
import {Role} from "../logic/entity/user_info";

export const personalRouter = express.Router()

personalRouter.get('/all', (request, response) => {
    getPersonal(request.body.login, request.body.token).then(res => {
        response.send(res)
    })
})

personalRouter.post('/fire', (request, response) => {
    fire(request.body.login, request.body.token, request.body.name,request.body.reason).then(res => {
        response.send(res)
    })
})

personalRouter.post('/hire', (request, response) => {
    let user = {
        id: undefined,
        mail: request.body.mail,
        name: request.body.name.split(" ")[1],
        surname: request.body.name.split(" ")[0],
        passport_number: request.body.passport_number,
        passport_series: request.body.passport_series,
        role: undefined,
        credentials:{
            login: "",
            password: ""
        }
    }
    switch (request.body.role) {
        case "user":
            user.role = Role.USER
            break
        case "manager":
            user.role = Role.MANAGER
            break
        case "chef":
            user.role = Role.CHEF
            break
        case "waiter":
            user.role = Role.WAITER
            break
        case "cleaner":
            user.role = Role.CLEANER
            break
    }
    hire(request.body.login, request.body.token, request.body.personal_login, user).then(res => {
        response.send(res)
    })
})