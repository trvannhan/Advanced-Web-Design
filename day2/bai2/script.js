var men = [
    {
        id: 1,
        name: "Áo sơ mi nam",
        oldPrice: "300.000 VNĐ",
        newPrice: "250.000 VNĐ",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjZ76LG9X9E_braqwTupxKaT4h1HWKwT2pHZBlm9TU-HJ9v6kEBzQs0vDKLbK6CpiJkCFxRR6wYHg-Okj0JFXz9HpLUiiSswJYhIdvZ8BiE6r4b6N9RUgYaUdF5JnwtYOMltpsuwg&usqp=CAchttps://i.pinimg.com/736x/1c/8e/0b/1c8e0b9a7d2f5c3a4e5b6f8c9d2a1b4.jpg"
    },
    {
        id: 2,
        name: "Quần jean nam",
        oldPrice: "380.000 VNĐ",
        newPrice: "320.000 VNĐ",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7zY6klunpm8YeYelESCsK43fpUjy-PQf5aXLCqSW-37yuI3fse8tIw-YKBJljczF15H0UJyhHC2NWL76z4m-04UsRL4wEX3PIug1MA2aB6xAc28suYT2Slw&usqp=CAc"
    },
    {
        id: 3,
        name: "Áo thun nam",
        oldPrice: "220.000 VNĐ",
        newPrice: "180.000 VNĐ",
        image: "https://i.pinimg.com/736x/46/44/ce/4644ce17db402a31c4d64f4bd9ec886b.jpg"
    }
];

var women = [
    {
        id: 1,
        name: "Váy nữ",
        oldPrice: "350.000 VNĐ",
        newPrice: "280.000 VNĐ",
        image: "https://product.hstatic.net/1000392326/product/fas53841.h_-_fjn5701.g__4__e00f4069b34f42d09f6d35d591682565_master.jpg"
    },
    {
        id: 2,
        name: "Áo khoác nữ",
        oldPrice: "420.000 VNĐ",
        newPrice: "350.000 VNĐ",
        image: "https://routine-db.s3.amazonaws.com/prod/media/ao-khoac-da-tweed-nu-jpg-6iih.webp"
    },
    {
        id: 3,
        name: "Giày nữ",
        oldPrice: "260.000 VNĐ",
        newPrice: "210.000 VNĐ",
        image: "https://i.pinimg.com/736x/8d/87/64/8d8764be611e1b5f3abbae4142310b97.jpg"
    }
];

function renderProducts(arr, titleText) {
    document.getElementById("title").innerText = titleText;

    var html = "";

    for (var i = 0; i < arr.length; i++) {
        html += `
        <div class="card">
            <img src="${arr[i].image}">
            <h4>${arr[i].name}</h4>
            <p class="old-price">${arr[i].oldPrice}</p>
            <p class="new-price">${arr[i].newPrice}</p>
            <button onclick="order()">Đặt mua</button>
        </div>
        `;
    }

    document.getElementById("product-list").innerHTML = html;
}

function showMen() {
    renderProducts(men, "THỜI TRANG NAM");
}

function showWomen() {
    renderProducts(women, "THỜI TRANG NỮ");
}

function showHome() {
    var allProducts = men.concat(women);
    renderProducts(allProducts, "SẢN PHẨM NỔI BẬT");
}

function searchProduct() {
    var keyword = document.getElementById("search").value.toLowerCase();
    var allProducts = men.concat(women);
    var result = [];

    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLowerCase().includes(keyword)) {
            result.push(allProducts[i]);
        }
    }

    renderProducts(result, "KẾT QUẢ TÌM KIẾM");
}

function order() {
    alert("Cảm ơn bạn đã đặt hàng!");
}