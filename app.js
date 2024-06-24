const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, './public/img')));

const db = require('./app/models');
db.mongoose.connect(db.url)
    .then((result) => {
        console.log('Connected to mongodb');

    }).catch((err) => {
        console.log(err);
        process.exit()
    });



app.get('/', (req, res) => {
    res.json({
        message: 'welcome to vuestore-server'
    });
});

app.use('/api/products', require('./app/routes/product.route'));
app.use('/api/orders', require('./app/routes/order.route'));

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});