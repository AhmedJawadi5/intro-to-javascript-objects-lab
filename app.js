
/*                  Part 1: Arrays               */
//Exercise 1:
const menuItems = ["Tea" , "Coffe" , "Sandwich" , "Cookie"];
console.log(menuItems[0]);
console.log(menuItems[2]);
console.log(menuItems.length);
console.log(menuItems[menuItems.length-1]);


//Exercsie 2:
const waitingCustomers = ["Aisha" , "Omar" , "Noor"];
waitingCustomers[1] = "Ali";
waitingCustomers.push("Dana");
console.log(waitingCustomers.length);
let removeCustomer = waitingCustomers.pop();
console.log(removeCustomer);
console.log(waitingCustomers);


//Exercise 3:
const drinks = ["Water" , "Tea" , "Coffee" , "Juice"];
for (let i=0 ; i<drinks.length ; i++) {
console.log((i+1)+ ". "+ drinks[i]);
}


//Exercise 4:
const prices = [2 , 5 , 3 , 6 , 4];
let totalPrice = 0;
let expensiveItemCount = 0;
prices.forEach(price => {
    totalPrice = totalPrice + price;
    if (price >= 4)
        expensiveItemCount++;
});
console.log(`Total price: ${totalPrice}`);
console.log(`Item costing 4 or more: ${expensiveItemCount}`);









/*                  Part 2: Objects               */
//Exercise 5:
const cafe = {
    name: "Campus Cafe" , 
    location: "Building A" , 
    seats: 24 ,
    isOpen: true ,
};
console.log(cafe.name+ " is located in "+ cafe.location);
console.log("Available seats: "+ cafe.seats);


//Exercise 6:
const drink = {
    name: "Iced Coffee" , 
    price: 3 , 
    size: "small" , 
    temporaryCode: "TEMP-01" , 
};
drink.size = "large";
drink.price = drink.price+1;
drink.isAvailable = true;
delete drink.temporaryCode;
console.log(drink);


//Exercise 7:
const order = {
    customerName: "Mariam" , 
    itemName: "Sandwich" , 
    price: 4 , 
    quantity: 3 , 
    isPaid: false , 
};
let orderTotal = order.price * order.quantity;
order.orderTotal = orderTotal;

console.log(order.customerName+ " Ordered "+ order.quantity+ " "+ order.itemName+ " items.");
console.log("order total: "+ order.orderTotal);

if (order.isPaid)
    console.log("Ready to prepare");
else
    console.log("Waiting fo payment");

order.isPaid = true;
if (order.isPaid)
    console.log("Ready to prepare");
else
    console.log("Waiting fo payment");









/*          Part 3: Arrays & Objects Together          */
//Exercise 8:
const studySession = {
    title: "JavaScript Practice" , 
    room: "Lab 2" , 
    topics: ["Variables" , "Arrays"] ,
};
console.log(studySession.topics[0]);
studySession.topics.push("Objects");
console.log(studySession.topics.length);
studySession.topics.forEach(topic => {
    console.log(topic);
});
studySession.room = "Lab 3";
console.log(`${studySession.title} will take place in ${studySession.room}.`);
console.log(studySession.topics);


//Exercise 9:
const products = [
    { name:"Tea" , price:2 } , 
    { name:"Sandwich" , price:4 } , 
    { name:"Cookie" , price:1 } ,
];
console.log(products[1].name);
products[1].price = 5;
products.push( {name:"Juice" , price:3} );

products.forEach(product => {
    console.log(`${product.name} costs ${product.price} BD.`);
});


//Exercise 10:
const studyGroup = {
    name: "Javascript Crew" , 
    members: [
        { name:"Aisha" , completedHomework:true } , 
        { name:"Omar" , completedHomework: false } , 
        { name:"Noor" , completedHomework: true } , 
    ] , 
};
console.log(studyGroup.name);
console.log(studyGroup.members.length);
let completedCount = 0;
studyGroup.members.forEach(member => {
    if (member.completedHomework === true)
        completedCount++;
    else
        console.log(`${member.name} needs to finish the homework.`);
});
console.log(`Completed homework: ${completedCount}`);











/*             Part 4: Add Functions             */
//Exercise 11:
function calculateTotal(itemPrices) {
    let total = 0;
    itemPrices.forEach(itemPrice => {
        total = total + itemPrice;
    });
    return total;
}
console.log(calculateTotal([2, 5, 3])); // 10
console.log(calculateTotal([4, 4]));    // 8
console.log(calculateTotal([7]));       // 7
console.log(calculateTotal([]));        // 0


//Exercise 12:
const bill = {
    customerName: "Noor" , 
    items: [
        { name:"Tea" , price:2 , quantity:2 } , 
        { name:"Sandwich" , price:4 , quantity:1 } , 
        { name:"Cookie" , price:1 , quantity:3 } , 
    ] , 
    getTotal() {
        let total = 0;
        for (let i=0 ; i<bill.items.length ; i++) {
            total = total + (bill.items[i].price * bill.items[i].quantity);
        }
        return total;
    }
};
console.log(bill.getTotal()); // 11
bill.items.push( {name:"Water" , price:1 , quantity:2} );
console.log(bill.getTotal()); // 13