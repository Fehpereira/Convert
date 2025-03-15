let btn = document.getElementById("btn-convert")
let coinSelect = document.getElementById("coin")

coinSelect.addEventListener("input", ()=>{

  let amount = document.getElementById("amount");

  if(amount.value >= 1 && coinSelect.value == "USD" || coinSelect.value == "BRL" || coinSelect.value == "EUR") {
    btn.removeAttribute("disabled", true)
  }

  btn.addEventListener("click", (event)=>{

  event.preventDefault()

  if(coinSelect.value == "USD"){

    const res = document.getElementById("res")
    res.classList.add("res")
    res.innerHTML = 
    `
      <small> ${amount.value} $ USD </small>
      <p> ${Number(amount.value) * 5.73} Reais</p>
    `
  }

  else if(coinSelect.value == "BRL"){

    const res = document.getElementById("res")
    res.classList.add("res")
    res.innerHTML = 
    `
      <small> R$ ${amount.value} </small>
      <p> ${Number(amount.value) * 1} Reais</p>
    `
  }

  else if(coinSelect.value == "EUR"){

    const res = document.getElementById("res")
    res.classList.add("res")
    res.innerHTML = 
    `
      <small> ${amount.value} € </small>
      <p> ${Number(amount.value) * 6.25} Reais</p>
    `
  }
  
  let convertContainer = document.querySelector(".convert-container")

    if(convertContainer){
    convertContainer.id = "border"
    }

  amount.value = ""
  coinSelect.value = ""
  btn.setAttribute("disabled", true)
  })
})
  







