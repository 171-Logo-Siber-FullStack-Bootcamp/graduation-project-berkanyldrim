const express = require('express')
//Controlerdakı amacımız ıslemlerı parcalara ayırmak suan sadece product oldugu ıcın ındex 
const Products = require('../controllers/productController')
const upload = require('../helper/imageUpload')
// ornek user  geldıgınde const User = require('../controllers/user')
//Router nesnesı yaratıyoruz
const router = express.Router()
router.get('/getallproduct', Products.getProducts)
router.post('/postproduct',upload.single("image"),Products.postProducts)
router.put('/putproduct/:id',Products.updateProducts)
router.delete('/deleteproduct/:id',Products.deleteProducts)
router.post('/productEl', Products.postProductElastic)
router.get('/productElg', Products.getProductElastic)
module.exports = router