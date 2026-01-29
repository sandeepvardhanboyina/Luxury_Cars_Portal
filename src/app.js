const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 6000;

// Set View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', mainRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
