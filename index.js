const pizzas = [];
localStorage.setItem("Pizzas", pizzas)

class Pizza {
    constructor(id, nombre, ingredientes, precio, img) {
        this.id = id,
            this.nombre = nombre,
            this.ingredientes = [ingredientes],
            this.precio = precio,
            this.img = img

    }
}



const pizzaMuzza = new Pizza(1, "Muzza", ["Muzzarella", " Aceitunas"], 554, "Muzza.jpg");
const pizzaRoquefort = new Pizza(2, "Roquefort", ["Roquefort", " Muzzarella", " Aceitunas"], 854, "Roquefort.jpg");
const pizzaCuatroQ = new Pizza(3, "4 Queso", ["Roquefort", " Muzzarella", " Chedar", " Gouda", " Aceitunas"], 1154, "4-quesos.jpg");
const pizzaAnana = new Pizza(4, "Anana", ["Anana", " Muzzarella", " Jamon", " Aceitunas"], 954, "Anana.jpg");
const pizzaCalabresa = new Pizza(5, "Calabresa", ["Calabresa", " Muzzarella", " Aceitunas negras"], 854, "Calabresa.jpg");
const pizzaAnchoas = new Pizza(6, "Anchoas", ["Anchoas", " Muzzarella", " Aceitunas negras"], 654, "Anchoas.jpg");
const pizzaPalmito = new Pizza(6, "Palmito", ["Palmitos", " Muzzarella","Salsa Golf", " Aceitunas"], 994, "Palmito.jpg");
const pizzaPoyo = new Pizza(6, "Poyo", ["Poyo", " Muzzarella","morron","cebolla", " Aceitunas negras"], 874, "Poyo.jpg");
const pizzaFugazzeta = new Pizza(6, "Fugazzeta", ["Fugazzeta", " Muzzarella","cebolla cocida","Jamon Crudo", " Aceitunas"], 724, "Fugazzeta.jpg");



pizzas.push(pizzaMuzza, pizzaRoquefort, pizzaCuatroQ, pizzaAnana, pizzaCalabresa, pizzaAnchoas,pizzaPalmito,pizzaPoyo,pizzaFugazzeta)

const body = document.getElementsByTagName("body")
const div = document.createElement("div");
const div_1 = document.createElement("div");
const inputBuscar = document.createElement("input")
const btn = document.createElement("button");
const seccion = document.querySelector("section")
const newContent = document.createTextNode("Buscar");

function addElements() {
    div.classList.add("container-buscar")
    inputBuscar.classList.add("idPizza")
    inputBuscar.setAttribute("type", "text");
    inputBuscar.setAttribute("onkeyup", "verificar(this.value)");
    btn.classList.add("boton");
    div_1.setAttribute("id", "render");


    seccion.appendChild(div_1);
    seccion.appendChild(div);
    div.appendChild(inputBuscar);
    div.appendChild(btn);
    btn.appendChild(newContent);
    localStorage.setItem("Pizzas", JSON.stringify(pizzas))
}

document.body.onload = addElements();





function mostrarInfo(nombre, precio, img, ingredientes) {

    div_1.innerHTML += `<div class="card">
     <h2>${nombre}</h2>
     <h4>$ ${precio}</h4>
     <img src="./Img/${img}" alt=" ${nombre}">   
     <p>Ingredientes: ${ingredientes}</p>
     </div>
    `;
}

function infoIncorrect () {
    // const clase = document.getElementById("render")
    seccion.innerHTML = ` <div class="modal">

    <p class="otraPizza"> Busca otra Pizza, por favor !!! </p>
    <button class="ok" onclick=cerrarModal()> Ok </button>
    </div>
    `;
 

}

function cerrarModal() {
    const modalCerrado = document.querySelector(".modal");
        modalCerrado.style.display = "none"
        addElements()
        pizzas.forEach(p => {
            mostrarInfo(p.nombre, p.precio, p.img, p.ingredientes)
        
        })
     
}
 
pizzas.forEach(p => {
    mostrarInfo(p.nombre, p.precio, p.img, p.ingredientes)

})

btn.disabled = true;

function verificar(value) {
    if (value.length > 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}


btn.addEventListener("click", () => {
    render.innerHTML = ""

    pizzas.forEach(p => {

        p.nombre.toUpperCase() == inputBuscar.value.toUpperCase() ? mostrarInfo(p.nombre, p.precio, p.img, p.ingredientes) : null
       
    });

    
    inputBuscar.value="";
    btn.disabled = true;
    div_1.innerHTML == "" ? infoIncorrect () : null
})





