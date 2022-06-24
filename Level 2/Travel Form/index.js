var form = document.getElementById('airline');
var submit = document.getElementById('submit');
var query = document.querySelector;

function formAlert () {
    var firstName = form.elements['firstName'].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["location"].value;
    var diet = [];
    if (form.elements['Vegatarian'].checked) {
        diet.push(document.getElementById("Vegatarian").value);
    }
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById('kosher').value);
    }
    if (form.elements['diabetic'].checked) {
        diet.push(document.getElementById('diabetic').value);
    }


    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nTravel Location: ${location} \nDiet: ${diet}`);
}


submit.addEventListener("click", formAlert);