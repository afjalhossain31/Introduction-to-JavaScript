/**
 * for a given strin tell me whether it has even number of characters or odd number of characters
 * even -> true
 * odd -> false
 */

function evenSizeString(str){
    const size = str.length;

    if(size % 2 === 0){
        console.log('even size');
        return true;
    }else
    {
        console.log('odd size');
        return false;
    }

    console.log(str, size);
}

// evenSizeString("Dhaka");
// evenSizeString("Chittagong");

function doubleOrTriple(number ,doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }else {
        const result = number * 3;
        return result;
    }

}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOfElements(arry){
    const len = arry.length;
    return len;
}

numberOfElements([7,13,15,17,19.5]);
