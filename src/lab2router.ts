// @ts-ignore
import * as express from 'express'
import * as useCases from "./logic/use_case/get_all_data_usecases"

export const router = express.Router()


router.get('/rentdocs', (request, response) => {
    useCases.getRentDocs().then( (res) =>
        response.send(res)
    )
})

router.get('/rooms', (request, response) => {
    useCases.getRooms().then( (res) =>
        response.send(res)
    )
})

router.get('/cleaningschedules', (request, response) => {
    useCases.getCleaningSchedules().then( (res) =>
        response.send(res)
    )
})

router.get('/credentials', (request, response) => {
    useCases.getCredentials().then( (res) =>
        response.send(res)
    )
})

router.get('/users', (request, response) => {
    useCases.getUsers().then( (res) =>
        response.send(res)
    )
})

router.get('/roomcleanings', (request, response) => {
    useCases.getRoomCleanings().then( (res) =>
        response.send(res)
    )
})

router.get('/dismissals', (request, response) => {
    useCases.getDismissals().then( (res) =>
        response.send(res)
    )
})

router.get('/recruitments', (request, response) => {
    useCases.getRecruitments().then( (res) =>
        response.send(res)
    )
})

router.get('/roomsloaddocs', (request, response) => {
    useCases.getRoomsLoadDocs().then( (res) =>
        response.send(res)
    )
})

router.get('/deliveries', (request, response) => {
    useCases.getDeliveries().then( (res) =>
        response.send(res)
    )
})

router.get('/deliveredproduct', (request, response) => {
    useCases.getDeliveredProduct().then( (res) =>
        response.send(res)
    )
})

router.get('/profitdocs', (request, response) => {
    useCases.getProfitDocs().then( (res) =>
        response.send(res)
    )
})

router.get('/product', (request, response) => {
    useCases.getProducts().then( (res) =>
        response.send(res)
    )
})

router.get('/dishes', (request, response) => {
    useCases.getDishes().then( (res) =>
        response.send(res)
    )
})

router.get('/menu', (request, response) => {
    useCases.getMenu().then( (res) =>
        response.send(res)
    )
})

router.get('/productindish', (request, response) => {
    useCases.getProductInDish().then( (res) =>
        response.send(res)
    )
})

router.get('/dishinorder', (request, response) => {
    useCases.getDishInOrder().then( (res) =>
        response.send(res)
    )
})

router.get('/dishinmenu', (request, response) => {
    useCases.getDishInMenu().then( (res) =>
        response.send(res)
    )
})

router.get('/orders', (request, response) => {
    useCases.getOrders().then( (res) =>
        response.send(res)
    )
})