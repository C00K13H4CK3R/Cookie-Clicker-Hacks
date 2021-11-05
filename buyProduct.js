/* Automatically buys a product (item) repetitively, once you have enough cookies. Note: you can only choose one product */

var productIdNum = prompt("Enter product number. (For Example, \n Cursor = 0, \n Grandma = 1, \n Farm = 2, \n (e.t.c.))");
function buy() {
    document.getElementById("product" + productIdNum).click();
}

setInterval(buy, 250);
