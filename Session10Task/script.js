arr = [1, 2, 3, 4, 5]
arr1 = ["a", "b", "c", "d", "e"]

// Function that reverses an array
function arrReverse(input) {
    for (let i = (input.length-1) ; i >= 0 ; i--){
        console.log(input[i])
    }
}

arrReverse(arr)
arrReverse(arr1)

/*---------------------------------------------- */

function Divide(input) {
    if (!(input%10)) return console.log("the number is divisible")
    return console.log("the number isn't divisible")
}

Divide(13) //isn't divisible
Divide(20) // is divisible

/*---------------------------------------------- */
arr2 = [50, 87 ,5, 120, 12]

// function that retrives the biggest number from an array
function maxNumber(input) {
    function compNumber(a, b) {
        if( a > b ) return 1
        if( a == b ) return 0
        if( a < b ) return -1
    }
    input = input.sort(compNumber)
    console.log(input[(input.length-1)])
}

maxNumber(arr2)
