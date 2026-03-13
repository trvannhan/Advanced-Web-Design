const exprees = require('express');
const path = require('path');

const pageRoutes = require('./routes/pageRoutes');

const app = exprees();
const PORT = 3000;

//kích hoạt public
app.use(exprees.static(path.join(__dirname, 'public')));

// cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng routes
app.use('/', pageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});