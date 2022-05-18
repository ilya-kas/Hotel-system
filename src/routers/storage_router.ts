// @ts-ignore
import * as express from 'express'
import {addProductToStorage, getProducts, removeProductFromStorage} from "../logic/use_case/storage_use_cases";

export const storageRouter = express.Router()

storageRouter.get('/all', (request, response) => {
    getProducts(request.body.login, request.body.token).then(res => {
        response.send(res)
    })
})

storageRouter.post('/add', (request, response) => {
    addProductToStorage(request.body.login, request.body.token, request.body.product).then(res => {
        response.send(res)
    })
})

storageRouter.post('/remove', (request, response) => {
    removeProductFromStorage(request.body.login, request.body.token, request.body.product).then(res => {
        response.send(res)
    })
})