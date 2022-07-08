const express = require("express")
const router = express.Router()
const connection = require("../database")


router
    .route("/products")
    .get((req, res) => {
        const {page} = Number(req.query)
        const perPage = 10
        const offset = ((page - 1) * perPage)
        if (page > 0) {
            connection.query('SELECT product.id, product.name, product.url_image, product.price, product.discount, category.name AS category FROM product INNER JOIN category ON product.category = category.id ORDER BY id LIMIT ? OFFSET ?',[perPage, offset], (err, rows) =>{
                if(!err) {
                    res.send(rows)
                } else {
                    console.log(err)
                }
            })
            
        } else {
            connection.query('SELECT product.id, product.name, product.url_image, product.price, product.discount, category.name AS category FROM product INNER JOIN category ON product.category = category.id ORDER BY id LIMIT 10', (err, rows) =>{
                if(!err) {
                    res.send(rows)
                } else {
                    console.log(err)
                }
            })
        }
    })


router
    .route("/products/all")
    .get((req, res) => {
        connection.query('SELECT * FROM product', (err, rows) =>{
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })

router
    .route("/product/:name")
    .get((req, res) => {
        const {name} = req.params
        connection.query('SELECT product.id, product.name, product.url_image, product.price, product.discount, category.name AS category FROM product INNER JOIN category ON product.category = category.id WHERE product.name = ?',[name], (err, rows) =>{
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })

router
    .route("/products/:categoryName")
    .get((req, res) => {
        const {categoryName} = req.params
        connection.query('SELECT product.id, product.name, product.url_image, product.price, product.discount, product.category, category.name as category FROM product INNER JOIN category ON product.category = category.id WHERE category.name = ? ORDER BY product.discount DESC',[categoryName], (err, rows) =>{
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })


module.exports = router