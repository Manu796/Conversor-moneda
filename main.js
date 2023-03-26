//Traigo los elementos html a JS
let convertir = document.getElementById("convertir")
let divisa = document.getElementById("divisa")
let cantidad = document.getElementById("cantidad")
let resultado = document.getElementById("resultado")
let modo = document.getElementById("modo")
let contenedor = document.getElementById("contenedor")
let pic = document.getElementById("pic")
let cerrar = document.getElementById("cerrar")
// let creditos = document.getElementById("creditos")
// let mostrar = document.getElementById("mostrar")

//Mostrar boton para otra pantalla
// mostrar.addEventListener("click", () =>{
//     creditos.style.display = "block"
// })

//Ocultar pantalla,  boton para otra cerrarla
cerrar.addEventListener("click", () =>{
    creditos.style.display = "none"
})

//Registra si la conversion es en dolares o euros
divisa.addEventListener("change", (e) =>{
    console.log(e.target.value)
})
//-----------  MODO NOCHE--------- //
modo.addEventListener("change", ()=>{
    if(modo.checked){
        contenedor.classList.add("noche") && contenedor.style.remove("contenedor::before")
    }else{
        contenedor.classList.remove("noche")
    }
})
// modo.addEventListener("change", ()=>{
//     contenedor.classList.toggle("noche")
// })

//Registra cuando hace click en el boton convertir y hace la cuenta de conversion

let convertilos = () =>{
    let valor= 0
    let moneda = "USD"
    console.log("soy convertilos")
    if(divisa.value == "USD"){
        valor = 383
        moneda = "USD"
        // resultado.style.color = "blue"
        pic.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/United_States_one_dollar_bill%2C_obverse.jpg/800px-United_States_one_dollar_bill%2C_obverse.jpg"
    }else{
        valor = 402
        moneda = "EUR"
        // resultado.style.color = "green"
        // resultado.style.border = "solid 1px black"
        pic.src = "https://img.freepik.com/iconos-gratis/simbolo-moneda-euro_318-41919.jpg"
    }
    // let elegida = parseInt() 
    let cuanto = parseInt(cantidad.value)
    let result = cuanto * valor
    resultado.innerHTML = cuanto + " " + moneda +" son: " + result + " Pesos " 
    
}
convertir.addEventListener('click', convertilos)


