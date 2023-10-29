console.log(`Hello world from HTML`)
//cách khai báo 1 biến object : obj{  }
//key: value 
//giữa các key là dấu phẩy
//không đặt tên key có dấu cách
let obj = {
    name : `eric`, 
    address : `hanoi`,
    email: ``,
    gender: ``,
}; //khai báo một object a

//let b ='address';
//obj[b]='HCM'; //giá trị của name được truyền vào

obj.address='HCM'; //thay đổi giá trị của key





console.log(`what is your name?`,` my name is `,obj['name'] ,obj) //lấy ra giá trị : <tên biến>.giá trị
console.log(`where are you from?` ,` i'm from `,obj['address'])



