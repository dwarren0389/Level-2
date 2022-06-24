// document.getElementById("submit")
// let num1 = document.add.result1.value
// let num2 = document.add.result1.value

// const additionButton = (num1, num2) => {
//     num1.preventDefault();
//     // document.getElementById("num1").value
//     console.log(num1 + num2);
// }

// const additionButton = (e) => {
//     e.preventDefault();
// }


document.getElementById("submit1").addEventListener('click', function addButton(e) {
    e.preventDefault();
    const num1 = document.add.addNum1.value;
    const num2 = document.add.addNum2.value;
    document.add.result1.value = Number(num1) + Number(num2);
});

document.getElementById("submit2").addEventListener('click', function subButton(e) {
    e.preventDefault();
    console.log(document.sub);
    const num1 = document.sub.subNum1.value;
    const num2 = document.sub.subNum2.value;
    document.sub.result2.value = Number(num1) - Number(num2);
});

document.getElementById("submit3").addEventListener('click', function mulButton(e) {
    e.preventDefault();
    const num1 = document.mul.mulNum1.value;
    const num2 = document.mul.mulNum2.value;
    document.mul.result3.value = Number(num1) * Number(num2);
});


