// @ts-ignore
import * as express from 'express'
import {getArg, logIn, register} from "../logic/use_case/auth_use_cases";
import {Role} from "../logic/entity/user_info";

export const enterRouter = express.Router()

enterRouter.get('/register', (request, response) => {
    let user = {
        id: 0,
        role: Role.USER,
        mail: request.body.mail,
        name: request.body.fullName.split(" ")[1],
        surname: request.body.fullName.split(" ")[0],
        passport_number: request.body.passport_number,
        passport_series: request.body.passport_series,
        credentials: {
            login: request.body.login,
            password: request.body.password
        }
    }
    register(user).then((res) => {
        if (res == "-1")
            response.send({
                token: res,
                error: "Login exists"
            })
        else if (res == "-2")
            response.send({
                token: res,
                error: "Arg does not exist"
            })
        else
            response.send({
                token: res,
                error: ""
            })
    })
})

enterRouter.get('/login', (request, response) => {
    logIn(request.body.login, request.body.password).then((res) => {
        if (res == "-1")
            response.send({
                token: res,
                error: "Login does not exist"
            })
        else if (res == "-2")
            response.send({
                token: res,
                error: "Arg does not exist"
            })
        else if (res == "-3")
            response.send({
                token: res,
                error: "Wrong credentials"
            })
        else
            response.send({
                token: res,
                error: ""
            })
    })
})

enterRouter.get('/arg', (request, response) => {
    getArg(request.body.login).then((res) => {
        if (res > 0)
            response.send({
                arg: res,
                error: ""
            })
        else
            response.send({
                arg: -1,
                error: "Login does not exist"
            })
    })
})

/**
 * логин, как и регистрация:
 * 1)клиент запрашивает соль
 * 2)соль+hash(пароль) вместо пароля -> возвращается (token+hash(пароль))
 * 3)при каждой операции далее, нужно передавать токен, где в поле вставлять hash(соль+токен)
 */