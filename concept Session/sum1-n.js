// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।

function totalSum (number){
 let sum = 0;
 for (let i = 0; i<=number; i++) {
     sum = sum + i;
 }
 return sum;

}

let result = totalSum(4);
console.log (result);