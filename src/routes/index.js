const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const cars = [
        {
            id: 1,
            name: "Ferrari",
            category: "Sports Car",
            price: 1200,
            image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Bugatti",
            category: "Luxury Sports Car",
            price: 2000,
            image: "https://images.unsplash.com/photo-1627454819213-f77d61183204?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Mercedes SUV",
            category: "SUV",
            price: 700,
            image: "https://images.unsplash.com/photo-1605559424843-9e4c2287d38d?auto=format&fit=crop&w=800&q=80"
        }
    ];
    res.render('index', { cars: cars, title: 'Car Rental Portal' });
});

module.exports = router;
