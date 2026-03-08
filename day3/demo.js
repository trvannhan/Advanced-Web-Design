// // let product = ["ao", "quan", "trang suc ", "dien thoai"];
// // let [a, b, c, d] = product;
// // console.log("đây là sản phẩm " + a); // "ao"
// // console.log("đây là sản phẩm " + b); // "quan"
// // console.log("đây là sản phẩm " + c); // "trang suc "
// // console.log("đây là sản phẩm " + d); // "dien thoai"

// // var [greeting,...rest] = ["Hello", "JavaScript", "ES6", "Destructuring"];
// // console.log(greeting);
// // console.log(rest);

// // const product = [
// //     { id: 1, 
// //         name: "iPhone 15", 
// //         price: 3618 },
// //     { id: 2,
// //         name: "Samsung S24",
// //         price: 900 }
// // ];
// // console.log(product[0].price); 

// var product = [
//     {id: 1,
//     name: "iPhone 12", 
//     price: 12000000 
//     },
//     { id: 2,
//     name: "iPhone 13",
//     price: 15000000 
//     },
//     { id: 3,
//     name: "iPhone 14",
//     price: 18000000 
//     },
//     { id: 4,
//     name: "iPhone 15",
//     price: 20000000 
//     },
//     { id: 5,
//     name: "iPhone 16",
//     price: 25000000 
//     },
// ];
// var [ , , , ...newProducts] = product;
// console.log(newProducts);
// // console.log(product[3]);
// // console.log(product[4]);

// const sum = (a, b) => a + b;
// const a = 5 
// const b = 10
// const string = `Tổng của ${a} và ${b} là: ${sum(a, b)}`;
// console.log(string);

// class preson {
//     constructor(name,address,phone,cccd) {
//         this.name = name;
//         this.address = address;
//         this.phone = phone;
//         this.cccd = cccd;
//     }

//     khaiBao() {
//         return `Tôi tên là ${this.name}, tôi sống tại ${this.address}, số điện thoại của tôi là ${this.phone}, số căn cước công dân của tôi là ${this.cccd}`;
//     }
// }
// const preson1 = new preson("Nguyễn Văn A", "Hà Nội", "0123456789", "123456789");
// console.log(preson1.khaiBao());

class Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

    perimeter() {
        return 2 * (this.length + this.width);
    }
}

function createShape() {
    const length = Number(document.getElementById("length").value);
    const width = Number(document.getElementById("width").value);
    return new Shape(length, width);
}

function showArea() {
    const shape = createShape();
    document.getElementById("result").innerText =
        "Diện tích: " + shape.area();
}

function showPerimeter() {
    const shape = createShape();
    document.getElementById("result").innerText =
        "Chu vi: " + shape.perimeter();
}
