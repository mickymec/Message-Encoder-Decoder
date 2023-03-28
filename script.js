// For encode

const txt1 = document.getElementById('encode');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
const btnTrash1= document.getElementById('btn-trash1');

const txt2 = document.getElementById('decode');
const btn2 = document.getElementById('btn2');
const out2 = document.getElementById('output2');
const btnTrash2= document.getElementById('btn-trash2');


// var decodeText1 = txt1.value;
// var encodeText1 = window.btoa(decodeText1);
let encode_text = 0;



function fun1() {
    encode_text = window.btoa(txt1.value)
    out1.innerHTML = encode_text;
    txt2.value = encode_text;
}

btn1.addEventListener("click", fun1);

btnTrash1.addEventListener("click", ()=> {
    out1.innerHTML = "";
})


// For decode


// var encodeText2 = txt2.value;
// var decodeText2 = window.atob(encodeText2);


function fun2() {
    out2.innerHTML = window.atob(txt2.value);
}

btn2.addEventListener("click", fun2);

btnTrash2.addEventListener("click", ()=> {
    out2.innerHTML = "";
})

function init() {
    // Clear forms here
    txt1.value = "";
    txt2.value = "";
}
window.onload = init;