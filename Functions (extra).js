// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

function giveMeRandom(n){
    randomArray = [];
    for(i=0;i<n;i++){
        randomArray.push(Math.round(Math.random()*10))
    }
    return randomArray
}

function checkArray(array){
    let sum = 0;
    for(i=0;i<array.length;i++){
        if(array[i]>5){
            console.log("Element",i,"which is the number",array[i],"is greater than 5");
            sum+=array[i];
        }else{
            console.log("Element",i,"which is the number",array[i],"is smaller than or equal to 5");
        }
    }
    return sum;
}

console.log("1.",checkArray(giveMeRandom(10)));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let object1={
        "price": 10,
        "name": "biscuits",
        "id": 1,
        "quantity": 3,
}
let object2={
        "price": 12,
        "name": "carrots",
        "id": 2,
        "quantity": 5,
}
let shoppingCart=[object1,object2];
function shoppingCartTotal(cart){
    cartPrice=0;
    for(i=0;i<cart.length;i++){
        cartPrice+=cart[i].price*cart[i].quantity;
    }
    return cartPrice;
}
let result2 = shoppingCartTotal(shoppingCart);
console.log("2.", result2);

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let object3 = {
    "price": 15,
    "name": "socks",
    "id": 3,
    "quantity": 3,
}
function addToShoppingCart(cart,object){
    cart.push(object);
    return cart.length;
}
const result3 = addToShoppingCart(shoppingCart,object3);
console.log("3.", result3);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart(cart){
    let mostexpensive = 0;
    let mostExpensiveItem=null;
    for(i=0;i<cart.length;i++){
        if(cart[i].price>mostexpensive){
            mostexpensive = cart[i].price;
            mostExpensiveItem=cart[i];
        }
    }
    return mostExpensiveItem;
}
const result4 = maxShoppingCart(shoppingCart);
console.log("4.", result4);

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(cart){
    return cart[cart.length-1];
}
const result5 = latestShoppingCart(shoppingCart);
console.log("5.", result5);

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(x){
    count=0;
    while(count!=3){
        currentnumber = Math.round(Math.random()*10);
        if(currentnumber>x){
            count++;
        }else{
            count=0;
        }
        console.log(Math.round(Math.random()*10)," ",count)
    }
}
const result6 = loopUntil(5);
console.log("6.", result6);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

function average(){

}
const result7 = average();
console.log("7.", result7);

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

let arrayOfStrings = ["string one","hey","what's up dude"]
function longest(array){
    longest = -1;
    for(i=0;i<array.length;i++){
        if(array[i].length>longest){
            longest = array[i].length;
        }
    }
    return longest;
}
const result8 = longest(arrayOfStrings);
console.log("8.", result8);

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

function antiSpam(){

}
const result9 = antiSpam();
console.log("9.", result9);

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

function numberOfDaysSinceDate(){

}
const result10 = numberOfDaysSinceDate();
console.log("10.", result10);

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x,y){
    for(i=0;i<x;i++){
        for(j=0;j<y;j++){
            console.log(i,j);
        }
    }
    return
}
const result11 = matrixGenerator(5,4);
console.log("11.", result11);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
