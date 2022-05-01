//even or odd

/*function isEvenorOdd(x){
    if(x % 2 == 0) {
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
isEvenorOdd(5);*/

//palindrome
 
/*function isPalindrome(x) {
    if(x<0) return false;
    let reverse = 0;
    for(let i=x;i>=1;i=Math.floor(i/10)) reverse = reverse*10 + i%10
    return reverse === x;
    
};*/

// palindrome words

/*function checkPalindrome(string){
    const len = string.length;
    for(let i = 0; i<len/2;i++){
        if(string[i] !== string[len-1-i]){
            return "Its not a palindrome"
        }
        
    }
    return "It is a palindrome"
}*/

//Anagram
/*function checkAnagram(a,b){
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
        console.log("Invalid input");
        return
    }
    let str1 = a.split('').sort().join("");
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        console.log("Anagram");

    }
    else{
        console.log("Not a Anagram")
    }

}
checkAnagram("India","dianI");*/

/*const number = 153 ;
const NumberofDigits = number.length;
sum = 0

let temp = number;
while(temp>0){
    let remainder = temp%10;
    sum += remainder**NumberofDigits;

    temp = parseInt(temp/10);

}
if(sum == number){
    console.log(" not a Armstrong number")
}
else{
    console.log(" Armstrong Number")*/

nums = [1,0,-1,-1,-4,2];
nums.sort((a,b)=>a-b);
console.log(nums) 




