import { app } from "./app";
import { createPayment } from "./endpoint/createPayment";

app.post("/purchase", createPayment)