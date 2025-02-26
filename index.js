
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
    });



let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
       
        document.querySelector("header").classList.add("hide-header");
    } else {
       
        document.querySelector("header").classList.remove("hide-header");
    }
    lastScrollTop = st <= 0 ? 0 : st; 
}, false);

document.addEventListener("DOMContentLoaded", function () {
const casas = [
{
    id: 1,
    img: "img/casalujosa.jpg",
    title: "Mansión Moderna",
    price: "4,750,000€",
    location: "Beverly Hills, California",
    rooms: "6 Habitaciones",
    baths: "7 Baños",
    description: "Una moderna mansión con vistas espectaculares y acabados de lujo."
},
{
    id: 2,
    img: "img/casalujosa2.jpg",
    title: "Villa Mediterránea",
    price: "3,500,000€",
    location: "Mallorca, España",
    rooms: "5 Habitaciones",
    baths: "6 Baños",
    description: "Un oasis de tranquilidad con un diseño de inspiración mediterránea."
},
{
    id: 3,
    img: "img/casalujosa3.jpg",
    title: "Penthouse de Lujo",
    price: "5,000,000 €",
    location: "Nueva York, EE.UU.",
    rooms: "4 Habitaciones",
    baths: "5 Baños",
    description: "Un penthouse exclusivo con vistas panorámicas a la ciudad."
},
{
    id: 4,
    img: "img/casalujosa4.jpg",
    title: "Residencia Clásica",
    price: "2,900,000 €",
    location: "Florencia, Italia",
    rooms: "7 Habitaciones",
    baths: "8 Baños",
    description: "Una casa con arquitectura clásica y jardines espectaculares."
},
{
    id: 5,
    img: "img/casalujosa5.jpg",
    title: "Residencia Exclusiva",
    price: "3,500,000 €",
    location: "Dubái, Emiratos Árabes",
    rooms: "5 Habitaciones",
    baths: "6 Baños",
    description: "Un hogar exclusivo con diseño elegante y moderno."
},
{
    id: 6,
    img: "img/casalujosa6.jpg",
    title: "Chalet Contemporáneo",
    price: "4,200,000 €",
    location: "Zermatt, Suiza",
    rooms: "6 Habitaciones",
    baths: "7 Baños",
    description: "Un chalet moderno con vistas impresionantes y acabados premium."
}
];


const modal = document.getElementById("casaModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalLocation = document.getElementById("modal-location");
const modalRooms = document.getElementById("modal-rooms");
const modalBaths = document.getElementById("modal-baths");
const closeModal = document.querySelector(".close-btn");


document.querySelectorAll(".ver-detalles").forEach(button => {
button.addEventListener("click", function () {
    const casaId = parseInt(this.getAttribute("data-id"));
    const casa = casas.find(c => c.id === casaId);

    if (casa) {
        modalImg.src = casa.img;
        modalTitle.textContent = casa.title;
        modalPrice.textContent = casa.price;
        modalDescription.textContent = casa.description;
        modalLocation.textContent = casa.location;
        modalRooms.textContent = casa.rooms;
        modalBaths.textContent = casa.baths;

        modal.style.display = "flex"; 
    }
});
});


closeModal.addEventListener("click", () => {
modal.style.display = "none";
});


window.addEventListener("click", (event) => {
if (event.target === modal) {
    modal.style.display = "none";
}
});
});
