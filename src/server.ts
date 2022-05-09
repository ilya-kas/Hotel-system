// @ts-ignore
import * as express from 'express'
import {router} from "./lab2router"

const port = 5000

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", router)

//app.listen(port, '192.168.200.68')
app.listen(port, '192.168.200.68')