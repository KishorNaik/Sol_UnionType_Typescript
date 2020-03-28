// Variable Declaration
var value;
value = 123; // OK
console.log(value);
value = "ABC"; // OK
console.log(value);
//value = true; // Not OK
//console.log(value);
onDemo(12);
onDemo(true);
function onDemo(para) {
    console.log(para);
}
