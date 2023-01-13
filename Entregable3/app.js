const ProductManager = require("../Entregable2/index");
const manager = new ProductManager("./data/Products.json")
const express = require('express');

const app = express();

        app.get('/products', async (req, res) => {

            const limit = req.query.limit;
            if(req.query.limit) {
                const filteredProducts = await manager.getProducts();
                res.send(filteredProducts.filter(prod => prod.id <= +limit && prod.id > 0));
            } else {
                const products = await manager.getProducts();
                res.send(products);
            }
            
        })

        app.get('/products/:pid', async (req, res) => {

            if(req.params.pid) {
                const prodId = req.params.pid
                console.log(req.params.pid)
                const products = await manager.getProducts();
                const findedProd = await products.find(prod => prod.id === +prodId);
                findedProd ? res.send(findedProd) : res.status(404).send('Product not found!');
            } 

        })
  
app.listen(8080, () =>  console.log('server is lisening in port 8080'));