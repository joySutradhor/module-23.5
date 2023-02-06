

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 


function bestFriend (arr) {
    let max = arr[0].length;
    let bigFriend = "" ;
    for (let i = 1; i<arr.length; i++) {
        if(arr[i].length> max) {
           max = arr[i].length;
           bigFriend = arr[i];

        }
    }
    
    return bigFriend ;
}

let arr = [ "joy", "nironjon", "aononna Sutradhor", "jon Sutradhor"];
let result = bestFriend(arr);
console.log(result);