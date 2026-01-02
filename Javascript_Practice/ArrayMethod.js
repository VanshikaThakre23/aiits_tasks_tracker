const arr = [1,2,3,4,5,6,7,8]


// *********       PUSH POP INCLUDES UNSHIFT SHIFT        ********************

arr.push(9); //add element at the end  of array
arr.pop(); // remove element from the last 
arr.unshift(4); // add 1 at the start and shift all the adjacent element to right 
arr.shift(); //remove element from the start

// *********    SPLICE *******************************
// syntax(startIndex , endIndex , item1 , item2)

let arrOne = arr.splice(1,4) 
console.log("splice " , arrOne);
console.log("og" , arr);



// *********** SLICE *********************************
// syntax(startIndex , endIndex , )

let arrTwo = arr.slice(1,4)
console.log("slice" , arrTwo)
console.log("og" , arr);



 