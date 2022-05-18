// @ts-ignore
import * as express from 'express'
import {addToOrder, createOrder, getOrders, removeFromOrder, submitOrder} from "../logic/use_case/orders_use_cases";

export const ordersRouter = express.Router()

ordersRouter.get('/orders', (request, response) => {
    getOrders(request.body.login, request.body.token).then(res => {
        response.send(res)
    })
})

ordersRouter.post('/create_order', (request, response) => {
    let order = {
        table: response.body.table,
        dishes: response.body.dishes
    }
    createOrder(response.body.login, response.body.token, order).then(res => {
        response.send(res)
    })
})

ordersRouter.post('/add_to_order', (request, response) => {
    addToOrder(response.body.login, response.body.token, response.body.table, response.body.name).then(res => {
        response.send(res)
    })
})

ordersRouter.post('/remove from_order', (request, response) => {
    removeFromOrder(response.body.login, response.body.token, response.body.table, response.body.name).then(res => {
        response.send(res)
    })
})

ordersRouter.post('/submit_order', (request, response) => {
    submitOrder(response.body.login, response.body.token, response.body.table).then(res => {
        response.send(res)
    })
})