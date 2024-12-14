/*let list=[];
let prompts=10
for (let i = 0; i < prompts; i++){
    let userInput = prompt(`Add 10 grocery items`);
    list.push(userInput);
}
console.log(list)*/
let num1 = document.getElementById("todo1");
let array=[];
function number() {
    if (num1){
        array.push(num1.value);

        console.log(array);
        document.getElementById("todo1").value=" ";
    }
}