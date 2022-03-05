const buttons = document.querySelectorAll(".tip-percentage button")
const noPeople = document.querySelector(".no-people input")
const bill = document.querySelector(".bill-amount input")
const custom = document.querySelector("#custom")
const a = document.querySelector("#a")
const b = document.querySelector("#b")
const reset = document.querySelector(".right button")
const error = document.getElementById("error")

// highlight entry
bill.onfocus = ()=>{
  document.querySelector(".bill-amount").classList.add("blue");
}
bill.onblur = ()=>{
  document.querySelector(".bill-amount").classList.remove("blue");
}

noPeople.onfocus = ()=>{
  document.querySelector(".no-people").classList.add("blue");
}
noPeople.onblur = ()=>{
  document.querySelector(".no-people").classList.remove("blue");
}

custom.onfocus = ()=>{
  document.querySelector("#custom").classList.add("blue");
}
custom.onblur = ()=>{
  document.querySelector("#custom").classList.remove("blue");
}
// highlight selected percentage
let z;
buttons.forEach((button) => {
  button.addEventListener("click", clicked)

  function clicked() {
    buttons.forEach((item) => {
      item.style.backgroundColor = "hsl(183, 100%, 15%)"
    })
    button.style.backgroundColor = "hsl(172, 67%, 45%)"
    x = button.value
  }
})

custom.addEventListener("click", cust)

function cust() {
  buttons.forEach(function(button) {
    button.style.backgroundColor = "hsl(183, 100%, 15%)"
  })
  custom.value = null;
  x = null;
}

custom.addEventListener("keyup", () => {
  x = custom.value
})

// calculation
noPeople.addEventListener("keyup", calculate)

function calculate() {
  if (noPeople.value == 0) {
    console.log("error")
    error.style.display = "block"
    document.querySelector(".no-people").style.cssText = "border:solid red"


  } else {
    error.style.display = "none"
    document.querySelector(".no-people").style.cssText = "border:solid hsl(172, 67%, 45%)"
    let aa = (x * bill.value / 100) / noPeople.value
    a.innerText = aa.toFixed(2)
    console.log(aa)
    let bb = (bill.value / noPeople.value) + aa
    b.innerText = bb.toFixed(2)
    console.log(bb)
    reset.disabled = false
  }
}

// Reset
reset.addEventListener("click", clear)

function clear() {
  bill.value = null
  cust()
  custom.value = null
  noPeople.value = null
  a.innerText = "$0.00"
  b.innerText = "$0.00"
  reset.disabled = true
}
