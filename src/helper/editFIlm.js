import { updateFilmAPi } from "../utils/updateFilmAPi";

export function editFilm(divCardFilm){
    const editBtns = divCardFilm.querySelectorAll(".btnEdit");
    editBtns.forEach((editBtn) => {
      editBtn.addEventListener("click", (e) => {
        const cardBody = divCardFilm.querySelector(".card-body")
        const h5CardTitle = divCardFilm.querySelector('.card-title')
  
        const editInputImg = document.createElement("input")
        editInputImg.classList.add("form-control")
        editInputImg.placeholder = "Editar imágen..."
        cardBody.insertBefore(editInputImg,h5CardTitle)
  
        
        const editInputTitle = document.createElement("input")
        editInputTitle.classList.add("form-control")
        editInputTitle.placeholder = "Editar titulo..."
        h5CardTitle.appendChild(editInputTitle)
  
        const cardText = divCardFilm.querySelector(".card-text")
        const editInputYear = document.createElement("input")
        editInputYear.classList.add("form-control")
        editInputYear.placeholder = "Editar Fecha"
  
        cardText.appendChild(editInputYear)
        
        
        console.log(e.target.dataset.id);
  
        editInputImg.addEventListener("keydown", (e) => {
          if(e.key === "Enter"){
            console.log(editInputImg.value);
          }
        })
        cardBody.addEventListener("keydown", (e) => {
          if(e.key === "Enter"){
            console.log('Imagen:', editInputImg.value);
          console.log('Título:', editInputTitle.value);
          console.log('Fecha:', editInputYear.value);
          const cardFilm = e.target.closest(".card")
          const itemData = {
            Title: editInputTitle.value || cardFilm.dataset.title,
            Year: editInputYear.value || cardFilm.dataset.year,
            id: cardFilm.dataset.id,
            Type: cardFilm.dataset.type,
            Poster: editInputImg.value || cardFilm.dataset.poster,
          }
          console.log(itemData);
          updateFilmAPi(itemData)
          window.location.reload()
          }
        })
      });
    });
  }
  

  