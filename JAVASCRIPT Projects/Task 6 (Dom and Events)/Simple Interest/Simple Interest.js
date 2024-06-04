function simpleInterest(){

let principal = eval(document.getElementById('t1').value)
let rate = eval(document.getElementById('t2').value)
let time = eval(document.getElementById('t3').value)
result = ((principal * rate * time) / 100)

alert(result)
}

function eraseData() {
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
}