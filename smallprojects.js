function greetVisitor(){
  console.log("Hello, JavaScript!")
  console.log("Hello, Visitor!")
  alert("My Starter Project")
}
const button = document.getElementById("button1")
button.onclick = function(){
  greetVisitor()
}