function averageOf6Num() {

let a = eval(document.getElementById('t1').value)
let b = eval(document.getElementById('t2').value)
let c = eval(document.getElementById('t3').value)
let d = eval(document.getElementById('t4').value)
let e = eval(document.getElementById('t5').value)
let f = eval(document.getElementById('t6').value)
let sum = ((a+b+c+d+e+f)/6)

alert(sum)
}

function eraseData() {
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
    document.getElementById('t4').value = ""
    document.getElementById('t5').value = ""
    document.getElementById('t6').value = ""
  }