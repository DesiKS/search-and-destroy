'use strict';

// Complete this algo
const minJumps = (arr) => {
    
    

};

function helper(currentIndex, arr) {
    let value = arr[currentIndex]
    let resultantArr = arr.slice(currentIndex+1, currentIndex+value+1)
    let maxIndexValArr = resultantArr.map((el, index) => {
        return el + index
    })
    let maxIndexPlusVal = Math.max(...maxIndexValArr)
    let intermediateIndex = maxIndexValArr.indexOf(maxIndexPlusVal)
    return currentIndex+intermediateIndex+1
}

module.exports = minJumps