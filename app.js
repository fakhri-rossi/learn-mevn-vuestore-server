const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});