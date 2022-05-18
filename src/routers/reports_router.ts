// @ts-ignore
import * as express from 'express'
import {bookedByTypesReport, incomeDoc} from "../logic/use_case/reports_use_cases";

export const reportsRouter = express.Router()

reportsRouter.get('/booked_by_types', (request, response) => {
    bookedByTypesReport(request.body.login, request.body.token).then(res => {
        response.send(res)
    })
})

reportsRouter.get('/income', (request, response) => {
    incomeDoc(request.body.login, request.body.token).then(res => {
        response.send(res)
    })
})