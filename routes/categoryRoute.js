const express = require("express")
const router = express.Router()
const connection = require("../database")

router
    .route("/categories")
    .get((req, res) => {
        connection.query('SELECT * FROM category ORDER BY id', (err, rows) =>{
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })



module.exports = router