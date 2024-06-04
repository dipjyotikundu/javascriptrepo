function doAddition() {

  let x = eval(document.getElementById('t1').value)
  let y = eval(document.getElementById('t2').value)
  let sum = (x + y)

  alert(sum)
}

function doMultiply() {

  let x = eval(document.getElementById('t1').value)
  let y = eval(document.getElementById('t2').value)
  let sum = (x * y)

  alert(sum)
}

function doDivide() {

  let x = eval(document.getElementById('t1').value)
  let y = eval(document.getElementById('t2').value)
  let sum = (x / y)

  alert(sum)
}
function doSubtraction() {

  let x = eval(document.getElementById('t1').value)
  let y = eval(document.getElementById('t2').value)
  let sum = (x - y)

  alert(sum)
}

function eraseData() {
  document.getElementById('t1').value = ""
  document.getElementById('t2').value = ""
}