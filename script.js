const display1 = document.getElementsByClassName("display-1")
const display2 = document.getElementsByClassName("display-2")
console.log(display2)
const displayTemp = document.getElementsByClassName("temp-display")
const clear = document.getElementsByClassName("clear")
const clearAll = document.getElementsByClassName("clear-all")
const allButton = document.getElementsByClassName("all-button")
const button = document.getElementsByClassName("button")
const operations = document.getElementsByClassName("operation")
const numbers = document.getElementsByClassName("number")
console.log(numbers)
const dot = document.getElementsByClassName("dot")
const equalTo = document.getElementsByClassName("equal-to")

let dis1 = "";
let dis2 = "";
let result = null;
let temp = "";
let mainOperation = "";
let dotSign = false


numbers.forEach(number => {
  number.addEvenLister("click", (e) => {
    if (e.target.innerText === !dotSign){
      dotSign = true
    } else {e.target.innerText === dotSign}
    return
  }) 
  dis2 = e.target.innerText;
  display2.innerText = dis2

  console.log(dis2)
  console.log(e.target.innerText)
});

operations.forEach(operation => {
  operation.addEvenLister("click", (e) => {
 if(!dis2) return
  }) 
  const lastOperation = e.target.innerText;
  if(dis1 === dis2 && mainOperation) {
    mathOperation()
  } else {
    // result.toString(dis2)
    result = parseFloat(dis2)
  }
})