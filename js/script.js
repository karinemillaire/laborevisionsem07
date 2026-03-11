const boutons = document.querySelectorAll(".bouton");
const modale = document.querySelector(".modale"); 

for(let i = 0; i< boutons.length; i++){
    boutons[i].addEventListener("click",openModal); 
}


function openModal () {
    console.log("ALLO");
    modale.classList.add("visible");
    let paragraphe = document.createElement("p");
    paragraphe.textContent = "modale";
    paragraphe.classList.add("paragraphe");
    modale.appendChild(paragraphe);

    paragraphe.addEventListener("click", closeModal)
    }

function closeModal(event) {
    modale.classList.remove("visible"); 
    modale.removeChild(event.currentTarget); 
}

