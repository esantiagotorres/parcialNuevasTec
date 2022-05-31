'use-strict';

const PORT = process.env.PORT || 3000;
const express = require('express'); 
const app = express();
const orders = require('./src/orders');

app.use(express.JSON());

app.post('/orders', (req, res) => {
    orders.CreateOrder(req.body)
          .then(orderId => res.Json({orderId}))
    }); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
