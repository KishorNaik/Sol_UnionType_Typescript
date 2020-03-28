// Variable Declaration

let value: (string | number);
value = 123;   // OK
console.log(value);

value = "ABC"; // OK
console.log(value);

//value = true; // Not OK
//console.log(value);

onDemo(12);
onDemo(true);


function onDemo(para: (number | boolean)) {

    console.log(para);

}
