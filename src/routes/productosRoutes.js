const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../public/images/products'));
    },
    filename: (req, file, cb)=>{
        const newFile = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null,newFile);
    }
});

const upload = multer({ storage });

router.post('/addProduct',upload.single('img'),productsController.postProduct);
router.get("/adminListarProducts", productsController.list);
router.get('/search',productsController.search);
router.get('/adminModiProducts',productsController.adminModiProducts);
router.put('/editProduct',upload.single('img2'),productsController.update);

router.get('/adminProducts',productsController.adminProducts);
router.get('/adminDeleteProducts',productsController.adminDeleteProducts);
router.get('/adminAddProduct',productsController.adminAddProduct);
router.delete('/deleteProduct/:id', productsController.delete);
router.get("/search/:search", productsController.searchProduct);


module.exports = router;