const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const Product = require('./models/Product');

dotenv.config();
connectDB();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

app.get('/', (req, res) => res.redirect('/products'));

// Tạo seed data (100 sản phẩm) nếu DB trống
(async () => {
    const mongoose = require('mongoose');
    mongoose.connection.once('open', async () => {
        const count = await Product.countDocuments();
        if (count === 0) {
            const categories = ['Điện thoại', 'Laptop', 'Tablet', 'Phụ kiện', 'Tai nghe', 'Đồng hồ', 'Máy ảnh', 'Loa', 'Bàn phím', 'Chuột'];
            const brands = ['Samsung', 'Apple', 'Xiaomi', 'Sony', 'LG', 'Asus', 'Dell', 'HP', 'Lenovo', 'Acer'];
            const demoData = [];
            for (let i = 1; i <= 100; i++) {
                const category = categories[Math.floor(Math.random() * categories.length)];
                const brand = brands[Math.floor(Math.random() * brands.length)];
                demoData.push({
                    name: `${brand} ${category} Pro ${String(i).padStart(3, '0')}`,
                    price: Math.floor(Math.random() * 50000000) + 500000,
                    category: category,
                    stock: Math.floor(Math.random() * 200) + 1,
                    description: `Sản phẩm ${category} chính hãng ${brand}, chất lượng cao, bảo hành 12 tháng.`
                });
            }
            await Product.insertMany(demoData);
            console.log('✅ Đã seed 100 sản phẩm!');
        }
    });
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));