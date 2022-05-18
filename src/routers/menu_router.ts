// @ts-ignore
import * as express from 'express'
import {
    addDishToMenu,
    addToDish,
    createDish,
    getDish,
    getMenu,
    removeDish,
    removeFromDish
} from "../logic/use_case/menu_use_cases";

export const menuRouter = express.Router()

menuRouter.get('/menu', (request, response) => {
    getMenu(request.body.login, request.body.token, request.body.date).then(res => {
        response.send(res)
    })
})

menuRouter.get('/dish', (request, response) => {
    getDish(request.body.login, request.body.token, request.body.dish).then(res => {
        response.send(res)
    })
})

menuRouter.post('/create_dish', (request, response) => {
    createDish(request.body.login, request.body.token, request.body.dish, request.body.description, request.body.price).then(res => {
        response.send(res)
    })
})

// добавить в меню
menuRouter.post('/add_dish', (request, response) => {
    addDishToMenu(request.body.login, request.body.token, request.body.dish).then(res => {
        response.send(res)
    })
})

menuRouter.post('/remove_dish', (request, response) => {
    removeDish(request.body.login, request.body.token, request.body.dish).then(res => {
        response.send(res)
    })
})

menuRouter.post('/add_to_dish', (request, response) => {
    addToDish(request.body.login, request.body.token, request.body.dish, request.body.product).then(res => {
        response.send(res)
    })
})

menuRouter.post('/remove_from_dish', (request, response) => {
    removeFromDish(request.body.login, request.body.token, request.body.dish, request.body.product).then(res => {
        response.send(res)
    })
})