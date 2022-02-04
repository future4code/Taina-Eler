import { app } from "./app";
import { createPayment } from "./endpoint/createPayment";
import { searchPurchases } from "./endpoint/searchPurchases";

app.post("/purchase", createPayment)

app.get("/purchase", searchPurchases)