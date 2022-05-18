// @ts-ignore
import * as express from 'express'
import {cleaningRouter} from "./routers/cleaning_router"
import {enterRouter} from "./routers/enter_router"
import {menuRouter} from "./routers/menu_router"
import {ordersRouter} from "./routers/orders_router"
import {personalRouter} from "./routers/personal_router"
import {reportsRouter} from "./routers/reports_router"
import {roomsRouter} from "./routers/rooms_router"
import {storageRouter} from "./routers/storage_router"
import {userRouter} from "./routers/user_router"

const port = 5000

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded());

app.use("/cleaning", cleaningRouter)
app.use("/enter", enterRouter)
app.use("/menu", menuRouter)
app.use("/orders", ordersRouter)
app.use("/personal", personalRouter)
app.use("/reports", reportsRouter)
app.use("/rooms", roomsRouter)
app.use("/storage", storageRouter)
app.use("/user", userRouter)

app.listen(port, '192.168.217.68')