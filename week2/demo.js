console.log("Hello world");

const name = "สมชาย", score = 82;

// #old  ต่อข้อความด้วย + อ่านยากและพลาดง่าย
console.log("แบบเก่า : ชื่อ " + name + " ได้ " + score + " คะแนน");

//new Template Literal ใช้ backtick ` ` และ ${ }
console.log(`แบบใหม่ : ชื่อ ${name} ได้ ${score} คะแนน`);

// ใส่ bolean
console.log(`ครึ่งหนึ่งของคะแนนคือ ${score / 2}`);
console.log(`ผ่านเกณฑ์หรือไม่ — ${score >= 50 ? "ผ่าน" : "ไม่ผ่าน"}`);

console.warn("console.warn — คำเตือน");
console.error("console.error — ข้อผิดพลาด");


//page 50
console.log("1  typeof '42'      =", typeof "42");
console.log("3  typeof null      =", typeof null);
console.log("5  typeof NaN       =", typeof NaN);
console.log("6  '5' + 3          =", "5" + 3);
console.log("7  '5' - 3          =", "5" - 3);
console.log("8  0.1 + 0.2        =", 0.1 + 0.2);
console.log("   0.1+0.2 === 0.3  =", 0.1 + 0.2 === 0.3);
console.log("9  10 / 0           =", 10 / 0);
console.log("10 'abc' * 2        =", "abc" * 2);

// เก็บจำนวนเงินที่ถูกต้อง
const priceSatang = 1050;   // 10.50 บาท
console.log("ราคา 3 ชิ้น =", (priceSatang * 3) / 100, "บาท");

function getPriceBuggy(size) {
    let price = 0;
    switch (size) {
        case "S": price = 30; break;
        case "M": price = 45; break;
        case "L": price = 60; break;
        default: price = 0;
    }
    return price;
}

function getPriceFixed(size) {
    switch (size) {
        case "S": return 30;
        case "M": return 45;
        case "L": return 60;
        default: return 0;
    }
}

for (const s of ["S", "M", "L", "XL"]) {
    console.log("ขนาด " + s + " → มีบั๊ก: " + getPriceBuggy(s) + " | แก้แล้ว: " + getPriceFixed(s));
}

