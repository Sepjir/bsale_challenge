const express = require("express")
const app =  express()
const port = process.env.PORT || 5000
const products =  require("./routes/productsRoute")
const category = require("./routes/categoryRoute")


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/static", express.static("public"))



// routes
app.use('/api/v1', products)

app.use('/api/v1', category)

// index
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})



app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))