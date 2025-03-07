/*shorthands for simpler code*/
const userInput = document.getElementById("input-value");
const checkBtn1 = document.getElementById("check-button-1");
const resultP1 = document.getElementById("result-p-1");

const startingNumberInput = document.getElementById("starting-number-input");
const endingNumberInput = document.getElementById("ending-number-input");
const checkBtn2 = document.getElementById("check-button-2");
const resultP2 = document.getElementById("result-p-2");


const checkIfPalindrome = input =>{

/*In case of blank input*/
if (input === ""){
    //clear any former result from display
    resultP1.innerText = "";

    alert("please insert a value to check")
    return;
}

/*making a clone of the input to put through the function while keeping original stored*/
const modifiedInput = input;

/*To make sure all spaces and capitals are removed to check for Palindrome*/

const smallStr = modifiedInput.replace(/[^A-Za-z0-9!@#$%^&*(),.?":{}|<>]/gi, "").toLowerCase();

 /*making a suggestion*/

    /*split the input in half*/

    halfInput = () =>{
        const halfPoint = Math.floor(smallStr.length/2);

        const firstHalf = smallStr.substring(0, halfPoint);
        
        const otherHalf = smallStr.substring(halfPoint);

        return {firstHalf, otherHalf};
    }

    secondHalfInput = () =>{
        let reverseStr = [...smallStr].reverse().join("")

        const reverseHalfPoint = Math.floor(reverseStr.length/2);

        const secondHalf = reverseStr.substring(reverseHalfPoint);

        const otherSecondHalf = reverseStr.substring(0, reverseHalfPoint);

        return {secondHalf, otherSecondHalf};
    }
    /*Combine halfs to make palindrome suggestion */

    let suggestionOne = halfInput(smallStr).firstHalf + secondHalfInput(smallStr).secondHalf;

    let suggestionTwo = secondHalfInput(smallStr).otherSecondHalf + halfInput(smallStr).otherHalf;

/*checking the Palindrome*/

if (smallStr === [...smallStr].reverse().join("")){

    resultP1.innerText = `${input} is a palindrome`;

} else {
   
    resultP1.innerText = `${input} is not a palindrome but ${suggestionOne} and ${suggestionTwo} are`;
}
}

/*Button Function*/
checkBtn1.addEventListener("click", () =>{

checkIfPalindrome(userInput.value);

//clear input from display
userInput.value = "";
})

/*Allow user to press Ener key instead of clicking button*/

userInput.addEventListener("keydown", e =>{
    if (e.key === "Enter"){
        checkIfPalindrome(userInput.value);
        
        userInput.value= ""
    }
})

/*Function for finding Palindrome between two numbers*/

const checkForPalindromeInRange = (input,input2) =>{

    //clear any former results

    resultP2.innerText = "";

    //making sure all inputs are numbers

    const regex = /[^a-zA-z!@#$%^&*(),.?":{}|<>]/gi;

    if (input === ""||input.search(regex)){
        alert("please insert a starting number to check")
    return;
    }
    
    if (input2 === ""||input2.search(regex)){
        alert("please insert an ending number to check")
    return;
    }

    //stopping negative numbers

    const negativeNum = /[^-]/gi;

    if (input.search(negativeNum)){
        alert("please insert positive numbers")
    return
    }

    /*making a clone of the input as a number to put through the function while keeping original stored*/

    let startingNumber = Number(input);
    const endingNumber = Number(input2);
 
    //If starting number is greater than ending number

    if (startingNumber > endingNumber){
            alert("Please make sure starting number is smaller than ending number!")
        return
        }

    /*list each number in the given range*/

    let range = []

    for(let i = startingNumber; i <= endingNumber; i++){
            range.push(i);
        }
    
    // new list for palindromes

    let pInRange = []
    
    //reversing the numbers in our list so we can compare

    const reverseFunc = (num) =>{
      let reverse = num.toString().split("").reverse().join("")
      return reverse
    }
    
    //pushing the numbers that are palindromes into our new list

   for (let i = 0; i < range.length; i++) {
     
    const  numString = range[i].toString();
    const  reverseNum = reverseFunc(range[i]);
    
    if (numString === reverseNum){
      pInRange.push(numString)
    }   
}
    //displaying the results

    let result = pInRange;
    console.log(result);

    resultP2.innerText = `The ${pInRange.length} palindrome(s) between ${startingNumber} and ${endingNumber}: ${result}`;
    
    return
}

//check button for the palindromes in range

checkBtn2.addEventListener("click", () =>{
    checkForPalindromeInRange(startingNumberInput.value, endingNumberInput.value);

    startingNumberInput.value = "";
    endingNumberInput.value = "";
}
)


startingNumberInput.addEventListener("keydown", e=> {
    if (e.key === "Enter"){
        endingNumberInput
    }
})

//allow user to press enter key instead of clicking check button
endingNumberInput.addEventListener("keydown", e => {
    if (e.key === "Enter"){
        checkForPalindromeInRange(startingNumberInput.value, endingNumberInput.value);

        startingNumberInput.value = "";
        endingNumberInput.value = "";
    }
    }
)