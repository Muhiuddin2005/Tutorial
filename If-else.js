const salary = 21001;
const isBCS = true;
const hasCar = false;
if((salary > 25000 && hasCar == true) || isBCS== true ){
    console.log('tomar 14 gosti raji')
}

if((salary > 25000 || hasCar == true) && isBCS== true ){
    console.log('tomar 14 gosti raji')
}




const money = -10;
if (money > 300) {
    console.log('bro you are rich!!!');
}
else{
    if(money > 100){
        console.log('tui gorib o na boro lok o na')
    }
    else {
        if (money > 0){
            console.log('dosto kola kha.calcium bara')
        }
        else {
            console.log('tui amar bondhu na. ')
        }
    }
}


const isPassed = true;
// if(isPassed === false)
if(!isPassed){
    console.log('toke biya diya dimu');
}
else {
    console.log('tumi amader noyon er moni')
}


/**
 * MULTI_LEVEL CONDITION
*/

const price = 2000;

if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price -discount;
    console.log(payAmount)
}
else {
    console.log(price);
}



let shippingCost = isPremiumMember
    ? cartTotal > 500
        ? 0        // Free shipping for premium members with cart > 500
        : 50       // Otherwise flat 50
    : cartTotal > 1000
        ? 20       // Non-premium: free-ish if cart > 1000
        : 100;     // Otherwise normal shipping



