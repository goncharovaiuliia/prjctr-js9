let users = new Array();
let specialUsers = new Array();

users = ["Igor", "Olga", "Vasilii"];


spesialUsers = users.slice();

spesialUsers[2] = "Ivan";

console.log("users -> ", users);
console.log("specialUsers -> ", spesialUsers);