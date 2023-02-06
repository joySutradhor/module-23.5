// Problem 3:  oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

function oilPrice (digel, petrol, octen ) {

    let digelPrice = 114 ;
    let petrolPrice = 130 ;
    let octenPrice = 135 ;

   let cost = (digelPrice * digel)  + (petrolPrice * petrol) + (octenPrice * octen);
   return cost ;


}

let totalCost = oilPrice(30,20,10) ;
console.log(totalCost);

// 1, 1, 1
// 30, 20, 10
// 1,0,2
// 0,2,3
// 379
// 7370
// 384
// 665
