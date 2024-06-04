function areaOfCircle(){

let r = eval(document.getElementById('t1').value)
const pi = 3.14
result = (pi * (r * r)) 

alert(result)
}

function eraseData() {
    document.getElementById('t1').value = ""
}