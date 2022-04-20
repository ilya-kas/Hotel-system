// @ts-ignore
import * as express from 'express'
import {router} from "./lab2router"

const port = 5000

const app = express()

app.use("/", router)

app.listen(port)