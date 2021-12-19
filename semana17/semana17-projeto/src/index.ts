import app from "./app"
import getAllProducts from "./endpoints/getAllProducts"
import getAllUsers from "./endpoints/getAllUsers"
import purchaseRecord from "./endpoints/purchaseRecord"
import resisterProducts from "./endpoints/registerProducts"
import registerUsers from "./endpoints/registerUsers"
import searchUserPurchases from "./endpoints/searchUserPurchases"




app.get("/users", getAllUsers)
app.post("/users", registerUsers)

app.get("/products", getAllProducts)
app.post("/products", resisterProducts)

app.get("/users/:user_id/purchases", searchUserPurchases)
app.post("/purchases", purchaseRecord)