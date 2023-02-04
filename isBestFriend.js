// Problem 5:  isBestFriend

// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

function isBestFriend (friend , friend1) {
    if(friend.name === friend1.friend && friend.friend === friend1.name) {
        return true ;
    }
    else {
        return false;
    }

}


let friendOne = { name: "doe", friend: "alex" };
let friendTwo = { name: "john", friend: "doe" };

let bestFriend = isBestFriend (friendOne , friendTwo);
console.log(bestFriend);