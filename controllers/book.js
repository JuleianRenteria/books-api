const router = require('express').router()
const { response } = require('express')
const db = require('../models')

router.get('/books', (req,res) => {
    db.Book.find()
    .then((books)=>{
        response.json()
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.get('/books/:id', (req,res)=>{
    db.Book.findbyId(req.params.id)
    .then(book => {
        response.json()
    })
    .catch(err=>{
        console.log('err', err)
        res.render('error404')
    })
})
