export function deleteFilm(divCardFilm,container){
    const deleteBtns = divCardFilm.querySelectorAll(".btnDelete");
  
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (e) => {
        const filmID = e.target.dataset.id;
        console.log(filmID);
        deleteFilmApi(filmID)
        container.removeChild(divCardFilm)
      });
    });
  }

  