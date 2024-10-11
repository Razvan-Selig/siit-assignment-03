console.log("The JS file works");


/* let userInput = prompt("How many numbers do you want to insert?");
const numberArr = []; 
let numberInput;

for (let i = 0; i < userInput; i++) {
    numberInput = prompt(`Enter ${i + 1} number: `)
    numberInput = Number(numberInput)
    numberArr.push(numberInput)
}

alert(`The array you created is ${numberArr} and it has ${numberArr.length} elements.`); */


const numberArray = [2, -1, 10, 6, -3, 8, 5]

function maxNumInArr(maxNum) {
    
    maxNum = numberArray[0]

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > maxNum) {
            maxNum = numberArray[i]
        }
        
    }
    alert(`The max number in the array is ${maxNum}`)
    
}

 maxNumInArr(numberArray);

















