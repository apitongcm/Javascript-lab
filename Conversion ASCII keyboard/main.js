const mykey = document.getElementById("myDecimal");
const tobinary = document.getElementById("myBinary");
const tohex = document.getElementById("myHex");
const tochar = document.getElementById("myChar");
const tooct = document.getElementById("myOct");
 
window.addEventListener('keydown', function(e){
    
    console.log(e);
    if (e.key != " ")
        tochar.innerText = e.key;
    else
    {
        tochar.innerText = "spacebar";
    }
    mykey.innerText =  e.keyCode;
    let toBin = e.keyCode.toString(2);
    tobinary.innerText = toBin;
    let toHex = e.keyCode.toString(16);
    tohex.innerText =  toHex;
    let toOct = e.keyCode.toString(8);
    tooct.innerText = toOct;
})