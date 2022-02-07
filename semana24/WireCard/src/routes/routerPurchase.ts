import { Router } from "express"
import { createPayment } from "../endpoint/createPayment"
import { searchPurchases } from "../endpoint/searchPurchases"

export const routerPurchase = Router()

routerPurchase.get("/", searchPurchases)
routerPurchase.post("/", createPayment)