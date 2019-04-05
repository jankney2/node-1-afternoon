var express= require('express')
var getProducts= require('./getProducts')
var getProductById= require('./getProduct')
var getId= require('./getId')
let port = 5000


let app= express()



app.listen(port, ()=>{
  console.log("hey there")
})

app.get("/api/products", getProducts)


app.get("/api/products/:id", getProductById)
app.get("/api/product/:id", getId)



