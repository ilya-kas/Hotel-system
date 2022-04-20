// @ts-ignore
import * as express from 'express'
export const router = express.Router()

router.get('/rentdocs', (request, response) => {
    response.send([{
        id: 0,
        start_date: Date(),
        end_date: Date(),
        room_id: 0,
        client_id: 0
    }])
})

router.get('/rooms', (request, response) => {
    response.send([{
        number: 0,
        room_count: 1,
        type: 0,
        client_id: 0
    }])
})

router.get('/cleaningschedules', (request, response) => {
    response.send([{
        id: 0,
        date: Date(),
        closed: true
    }])
})

router.get('/credentials', (request, response) => {
    response.send([{
        owner_id: 0,
        login: "login",
        password: "passwordHash"
    }])
})

router.get('/users', (request, response) => {
    response.send([{
        id: 0,
        mail: "mail@gmail.com",
        name: "name",
        surname: "surname",
        passport_number: 1235142,
        passport_series: "BM",
        role: 0
    }])
})

router.get('/roomcleanings', (request, response) => {
    response.send([{
        id: 0,
        cleaned: true,
        room_id: 0,
        responsible_id: 0,
        schedule_id: 0
    }])
})

router.get('/dismissals', (request, response) => {
    response.send([{
        id: 0,
        reason: "reason",
        date: Date(),
        employee_id: 0
    }])
})

router.get('/recruitments', (request, response) => {
    response.send([{
        id: 0,
        begin_date: Date(),
        end_date: Date(),
        role: 0,
        salary: 100,
        employee_id: 0
    }])
})

router.get('/roomsloaddocs', (request, response) => {
    response.send([{
        id: 0,
        start_date: Date(),
        end_date: Date(),
        stats: {
            cheap: 1,
            normal: 2,
            rich: 1
        }
    }])
})

router.get('/deliveries', (request, response) => {
    response.send([{
        id: 0,
        date: Date(),
        supplier: "supplier"
    }])
})

router.get('/deliveredproduct', (request, response) => {
    response.send([{
        id: 0,
        delivery_id: 0,
        product_id: 0,
        count: 1
    }])
})

router.get('/profitdocs', (request, response) => {
    response.send([{
        id: 0,
        start_date: Date(),
        end_date: Date(),
        rooms_income: 100,
        restaurant_income: 200,
        salaries: 150,
        orders: 3,
        profit: 200
    }])
})

router.get('/product', (request, response) => {
    response.send([{
        id: 0,
        name: 0,
        count: 1
    }])
})

router.get('/dishes', (request, response) => {
    response.send([{
        id: 0,
        name: "name",
        description: "description",
        price: 12
    }])
})

router.get('/menu', (request, response) => {
    response.send([{
        id: 0,
        date: Date()
    }])
})

router.get('/productindish', (request, response) => {
    response.send([{
        id: 0,
        dish_id: 0,
        product_id: 0,
        count: 1
    }])
})

router.get('/dishinorder', (request, response) => {
    response.send([{
        id: 0,
        dish_id: 0,
        order_id: 0,
        count: 1
    }])
})

router.get('/dishinmenu', (request, response) => {
    response.send([{
        id: 0,
        dish_id: 0,
        menu_id: 0
    }])
})

router.get('/orders', (request, response) => {
    response.send([{
        id: 0,
        table: 0
    }])
})