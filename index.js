const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const chefInfo = require('./data/chefsInfo.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('ruchi bhoj server is running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/chefsinfo', (req, res) => {
    res.send(chefInfo);
});

app.get('/chefsinfo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefInfo.chefs.find(chef => chef.id === id);
    res.send(chef);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
