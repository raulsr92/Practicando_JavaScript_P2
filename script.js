

// 1° Arrays 

const equiposInglaterra= [];

equiposInglaterra.push(
    {
       escudo: "./img/england-team1.jpg",
       nombre: "Manchester United",
       descripcion: "Equipo de la ciudad de Manchester, cuyo color princpal es el rojo."
    }
)

equiposInglaterra.push(
    {
       escudo: "./img/england-team2.jpg",
       nombre: "Chelsea",
       descripcion: "Equipo de la ciudad de Londres, cuyo color princpal es el azúl."
    }
)
equiposInglaterra.push(
    {
       escudo: "./img/england-team3.jpg",
       nombre: "Tottenham Hotspur",
       descripcion: "Equipo de la ciudad de Londres, cuyo color princpal es el blanco."
    }
)

const equiposItalia= [];

equiposItalia.push(
    {
       escudo: "./img/italy-team1.jpg",
       nombre: "Inter de Milán",
       descripcion: "Equipo de la ciudad de Milán, cuyos colores princpales son el azúl y negro."
    }
)

equiposItalia.push(
    {
       escudo: "./img/italy-team2.jpg",
       nombre: "AC. Milán",
       descripcion: "Equipo de la ciudad de Milán, cuyos colores princpales son el rojo y negro."
    }
)

equiposItalia.push(
    {
       escudo: "./img/italy-team3.jpg",
       nombre: "Juventus",
       descripcion: "Equipo de la ciudad de Milán, cuyos colores princpales son el blanco y negro."
    }
)

const equiposEspaña= [];

equiposEspaña.push(
    {
       escudo: "./img/spain-team1.jpg",
       nombre: "Real Madrid",
       descripcion: "Equipo de la ciudad de Madrid, cuyo color princpal es el blanco."
    }
)

equiposEspaña.push(
    {
       escudo: "./img/spain-team2.jpg",
       nombre: "Barcelona",
       descripcion: "Equipo de la ciudad de Barcelona, cuyos colores princpales son el azul y rojo."
    }
)

equiposEspaña.push(
    {
       escudo: "./img/spain-team3.jpg",
       nombre: "Atlético de Madrid",
       descripcion: "Equipo de la ciudad de Madrid, cuyos colores princpales son rojo y blanco."
    }
)

const equiposPortugal=[];

equiposPortugal.push(
    {
       escudo: "./img/portugal-team1.jpg",
       nombre: "Sporting de Lisboa",
       descripcion: "Equipo de la ciudad de Lisboa, cuyos colores princpales son el verde y blanco."
    }
)

equiposPortugal.push(
    {
       escudo: "./img/portugal-team2.jpg",
       nombre: "Porto",
       descripcion: "Equipo de la ciudad de Oporto, cuyos colores princpales son el azúl y blanco."
    }
)

equiposPortugal.push(
    {
       escudo: "./img/portugal-team3.jpg",
       nombre: "Benfica",
       descripcion: "Equipo de la ciudad de Benfica, cuyo color principal es el rojo."
    }
)


// 2° Creacion de elementos HTML

const cardsContainer = document.getElementById("coleccion-cards");

const btnEng =document.getElementById("btn-eng");
const btnSpa =document.getElementById("btn-spa");
const btnIta =document.getElementById("btn-ita");
const btnPort =document.getElementById("btn-port");

console.log(btnEng)

btnEng.addEventListener("click", () => {
    mostrarEquipos(equiposInglaterra)
});

btnSpa.addEventListener("click", () => {
    mostrarEquipos(equiposEspaña)
});


btnIta.addEventListener("click", () => {
    mostrarEquipos(equiposItalia)
});

btnPort.addEventListener("click", () => {
    mostrarEquipos(equiposPortugal)
});


function mostrarEquipos(array) {

    const elementoFila = document.createElement("div");
    elementoFila.setAttribute("class", "row mb-3");
    cardsContainer.append(elementoFila);

    array.forEach(element => {

        const elementoDiv1 = document.createElement("div");
        elementoDiv1.setAttribute("class","col-4");
        elementoFila.append(elementoDiv1);

        const elementoDiv2 = document.createElement("div");
        elementoDiv2.setAttribute("class","card");
        elementoDiv1.append(elementoDiv2);

        const imgCard = document.createElement("img");
        imgCard.setAttribute("src",element.escudo);
        imgCard.setAttribute("class","card-img-top");
        elementoDiv2.append(imgCard);

        const elementoDiv3 = document.createElement("div");
        elementoDiv3.setAttribute("class","card-body");
        elementoDiv2.append(elementoDiv3);

        const cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        elementoDiv3.append(cardTitle)
        cardTitle.innerHTML = element.nombre;

        const description = document.createElement("p");
        description.setAttribute("class", "card-text");
        elementoDiv3.append(description);
        description.innerHTML = element.descripcion;

        const cardButton = document.createElement("a");
        cardButton.setAttribute("class", "btn btn-primary");
        elementoDiv3.append(cardButton);
        cardButton.innerHTML = "Ver más";
        
    }); 
}

