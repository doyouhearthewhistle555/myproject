function greetVisitor(){
  console.log("Hello, JavaScript!")
  console.log("Hello, Visitor!")
  alert("My Starter Project")
}
const button = document.getElementById("button1")
button.onclick = function(){
  greetVisitor()
}
const cash = 99999
TernaryOperator = cash > 10000 ? "Your rich! (why you looking at the console!?) this is a Ternary operator test.": "Your poor :(";
console.log(TernaryOperator)
const a = document.getElementById("input1")
const b = document.getElementById("button2")
const c = document.getElementById("label1")
let submittedInput
b.onclick = function(){
  submittedInput = a.value
  c.textContent = `You typed: ${submittedInput}`
  console.log("Successfully Submitted Input")
  console.log(`You typed: ${submittedInput}`)
  alert(`You typed: ${submittedInput}`)
}
const d = document.getElementById("button3")
const e = document.getElementById("button4")
const f = document.getElementById("button5")
const g = document.getElementById("label2")
let countedNum = 0
d.onclick = function(){
  countedNum = countedNum + 1
  g.textContent = countedNum
  console.log(countedNum)
let indicator = countedNum > 1000 ? "You beat the game!": "Start of number counter game.";
console.log(indicator)
}
e.onclick = function(){
  countedNum = countedNum - 1
  g.textContent = countedNum
  console.log(countedNum)
}
f.onclick = function(){
  countedNum = 0
  g.textContent = countedNum
  console.log(countedNum)
  console.log("Successfully Resetted")
}