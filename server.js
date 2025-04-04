const express = require('express')
const app = new express()
app.use(express.json())


// const mongoURL = "mongodb://localhost:27017"

// mongoose.connect

const products = [];

app.use((req, res, next)=>{
    console.log('Request recieved')
    next()
})

app.get('/products', (req, res) => {
    res.status(200).send({data: products})
})

app.get('/products/:id', (req, res) => {
    console.log(req.params, products)
    const productId = req.params.id
    let product = {}
    for (const element of products) {
        console.log(element)
        if(element['id'] === parseInt(productId)){
            product = element
        }
    }
    Object.keys(product).length ? res.status(200).send({data: product}) : res.status(400).send({data:product, message: 'No matched records found'})
})

app.post('/products', (req, res) => {
    const productList = req.body
    console.log('Prodcut', productList)
    for (const element of productList) {
        element['id'] = products.length
        products.push(element)
    }
    res.status(201).send({message: "Inserted", products})
})

app.patch('/products', (req, res) => {
    console.log('PATCH', req.body)
    for (const element of products) {
        if(element['id'] === parseInt(req.body.id)){
            console.log(element, req.body.pirce,'matched')
            element['price'] = req.body['price'] ? req.body.price : element.price
            element['name'] = req.body['name'] ? req.body.name : element.name
        }
    }
    res.status(200).send({"message": "Product info updated", products})
})

app.delete('/products', (req, res) => {
    console.log('Delete', req.body)
    const deleteProducts = req.body
    for (const deleteProduct of deleteProducts) {
        console.log(deleteProduct, 'Deleting')
        for (const [index, element] of products.entries()) {
            console.log(element, index, 'Matched')
            if(element['id'] === parseInt(deleteProduct.id)){
                console.log(element,'delete')
                products.splice(index,1)
            }
        }        
    }

    res.status(200).send({"message": "Product info updated", products})
})


app.listen(3003, () => {
    console.log('Server up and running')
})