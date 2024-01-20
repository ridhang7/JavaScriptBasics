const arr = [1,2,3,4,5,6,7, {name: 'socks'}]
const len = 0;

console.log(arr);
console.log(Array.isArray(arr)); console.log(Array.isArray(len));

arr.push(100);
console.log(arr);

arr.splice(0,3);
console.log(arr);

const nums = [10, 20, 30];
console.log(nums);
nums[nums.length - 1] = 99;
console.log(nums);

console.log(lastElementOfArray([1, 2, 3, 4, 5, 6, 7, 8])); 
console.log(elementSwap([1, 2, 3, 4, 5, 6, 7, 8]));

function lastElementOfArray(numList) {
let lastNumber = numList[numList.length -1];
    return lastNumber;
}

function elementSwap (numList) {
    let temp = numList[0];
    numList[0]= numList[numList.length -1];
    numList[numList.length -1] = temp;
return numList;
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

console.log(addElementCount([1, 2, 3, 4, 5, 6, 7, 8]));

function addElementCount(numList) {
    let newNumList = [];
    for (let i = 0; i < numList.length; i++) { 
        newNumList.push(numList[i] + 1);
    }
return newNumList;
}

console.log(addElementNum([1, 2, 3, 4, 5, 6, 7, 8], 5)); 

function addElementNum(numList, num) {
    let newNumList = [];
    for (let i = 0; i < numList.length; i++) { 
        newNumList.push(numList[i] + num);
    }
return newNumList;
}

console.log(addArrayElement([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]));

function addArrayElement(numList1, numList2) {
    let newNumListAdd = [];
    for (let i = 0; i < numList1.length; i++) {
        newNumListAdd.push( numList1[i] + numList2[i]);
    }
return newNumListAdd;
}

console.log(countPositive([-1,-2,-3,-4,-5,-6,0, 1, 2, 3, 4, 5, 6, 7, 8]));
function countPositive (numList) {
    let count = 0;
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] >0) {
            count++;
        }
    }    
return count;

}
console.log(minMax ([8, 7, 6, 5, 3, 2, 1, 0]));
console.log(minMax([8])); 
console.log(minMax([]));

function minMax(numList) {
    let _minMax = { "min": null, "max": null }; 
    let temp = 0;
    if (numList.length > 1) {
        for (let i = 0; i < numList.length; i++) {
            for (let j=i+1; j < numList.length; j++) { 
                if (numList[i]> numList[j]) {
                    temp = numList[i];
                    numList[i]
                    numList[j];
                    numList[j] =temp;
                }
            }
        }
        minMax.min = numList[0];
        minMax.max= numList[numList.length - 1];
    }
    else if (numList.length === 1) {
        _minMax.min = numList[0];
        _minMax.max = numList[numList.length - 1];
    }
return _minMax;
}

console.log(countWords (['apple', 'mango', 'banana', 'strawberry', 'apple', 'mango', 'orange'])); 
function countWords (wordList) {
    let wordCount = {};
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        if (!wordCount [word]) {
            wordCount [word] = 1;
        }
        else {
            wordCount[word]++;
        }
    }    
return wordCount;
}

const array1 = [1, 2, 3];
const array2 = array1;

console.log('previous array 1->' + array1); 
console.log('previous array 2->' + array2); 

array2.push(4);
console.log('after push array 1->' + array1); 
console.log('after push array 2->' + array2);

const array3 = array1.slice();
console.log('after slice array 1->' + array1);
console.log('after slice array 3->' + array3);

const [firstValue, SecondValue] = array1;
//Array destructring
console.log(firstValue, SecondValue);

const searchString = ['hello', 'google', 'egg', 'search', 'egg', 'for', 'algorithm', 'Egg', 'egg']; 

console.log(searchStringElement(searchString, 'crls'));

function searchStringElement(stringArray, word) {
    let counter = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i]=== word) {
            counter = 0;
            return i; 
            break;
        }
        else {
            counter++;
        }
    }
    if (counter > 0) {
        return -1;
    }
}
removeEgg (searchString, 2);
removeReverseEgg (searchString, 2);

function removeEgg (foodList, noOfElementToRemove) {
    let counter = 0;
    const newFoodList = [];
    for (let i = 0; i < foodList.length; i++) {
        if (foodList[i].toLowerCase() === 'egg'){
            counter++;
            if (counter > noOfElementToRemove) {
                newFoodList.push(foodList[i]);
            } else {
                continue;
            }
        }
        else{
            newFoodList.push(foodList[i]);
        }
    }        
    console.log(newFoodList);
}

function removeReverseEgg (foodList, noOfElementToRemove) {
    let counter = 0;
    const newFoodList = [];
        for (let i = foodList.length < 1; i >=0; i--) {
            if (foodList[i].toLowerCase() === 'egg'){
                counter++;
                if (counter > noOfElementToRemove) {
                    newFoodList.push(foodList[i]);
                }
                else {
                    continue;
                }
            }
            else {
                newFoodList.push(foodList[i]);
            }
        }
    console.log(newFoodList.reverse());
}

FizzBuzz();

function FizzBuzz() {
    for (let i = 1; i <=20; i++){
        if (i % 3 === 0 && i % 5 === 0) { 
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0 ) {
            console.log('Fizz');
        } 
        else if (i % 5 ===0){
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
function unique (arrayList) {
    const uniqueList = [];
    for (let i = 0; i < arrayList.length; i++) {
        if (searchStringElement(uniqueList, arrayList[i]) === -1) {
            uniqueList.push(arrayList[i]);
        }
    console.log
    }
}    



