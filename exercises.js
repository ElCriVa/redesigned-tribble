//flatten 3.1
export function flatten() {
    let arrays = [[1, 2, 3], [4, 5], [6]];
    let flatArray = arrays.reduce ((acc, curVal) => {
        return acc.concat(curVal)
    }, []);
    console.log(flatArray);
}

//loop 3.2
export function displayProduct () {
    for (let n = 3; n > 0; n--) {
        console.log(n);
    }
}

//test loop 3.3
export function everything () {
    function every(array, test) {
        for (let n = 0; n < array.length; n++){
            if(!test(array[n])){
                return false;
            }
        }
        return true;
      }
      
      console.log(every([1, 3, 5], n => n < 10));
      console.log(every([2, 4, 16], n => n < 10));
      console.log(every([], n => n < 10));

//some function 3.4
      function every(array, test) {
       return !array.some(n => !test(n));
      }
      
      console.log(every([1, 3, 5], n => n < 10));
      console.log(every([2, 4, 16], n => n < 10));
      console.log(every([], n => n < 10));
}