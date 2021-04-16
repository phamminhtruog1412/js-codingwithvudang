/**
 * global scope
 */

var x = 100
function sayLoveNhu(){ //function scope
    for(var i= 0; i<10 ; i++){ //block scope
        console.log(i)

    }
    var z="ongtrumbackend"
    console.log(z)
}
sayLoveNhu()
console.log(x)
