import app from "./app"
import getAllProducts from "./endpoints/getAllProducts"
import getAllUsers from "./endpoints/getAllUsers"
import purchaseRecord from "./endpoints/purchaseRecord"
import resisterProducts from "./endpoints/registerProducts"
import registerUsers from "./endpoints/registerUsers"




app.get("/users", getAllUsers)
app.post("/users", registerUsers)

app.post("/products", resisterProducts)
app.get("/products", getAllProducts)

app.post("/purchases", purchaseRecord)