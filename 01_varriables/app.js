/**
 * global scope
 */


function sayLoveNhu(){ //function scope
    for(var i= 0; i<10 ; i++){ //block scope
        console.log(i)
    }
}
sayLoveNhu()

