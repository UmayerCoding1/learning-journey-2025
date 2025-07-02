let seller = {
    fullname: "Top seller 1",
    username: "topseller",
    password: 'seller1390',
    avatar: "https://cludinary-avatar-fa1023033099.png",
    isVarifyed: true,
    paymentStatus : false
    //don't have a  product to ptoduct: undifind 
};


if (!seller.paymentStatus) {
    console.log(seller);
}else{
    console.log("don't find seller");
}
// seller.paymentStatus =  true;

seller = {...seller, paymentStatus: true}
const car = {
    make: "Tesla",
    model: "X 3",
    year: 2022,
    fuelType: "electric",
    body: "couple",
    seate: 5,
    seller: {...seller,product: 1},
}

if (!seller.paymentStatus) {
    console.log(seller);
}else{
    console.log("don't find seller");
}
 
// console.log(car);
