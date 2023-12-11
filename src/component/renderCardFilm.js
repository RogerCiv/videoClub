import { deleteFilm } from "../helper/deteleFilm";
import { editFilm } from "../helper/editFIlm";
import { deleteFilmApi } from "../utils/deleteFilmApi";
import { updateFilmAPi } from "../utils/updateFilmAPi";

export function renderCardFilm(container, filmData) {
  const divCardFilm = document.createElement("div");

  divCardFilm.classList.add("col-md-6");

  divCardFilm.innerHTML = `
    <div class="card" style="width: 18rem;" data-poster="${filmData.Poster}" data-id="${filmData.id}" data-title="${filmData.Title}" data-year="${filmData.Year}" data-type="${filmData.Type}" >
    <img src="${filmData.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${filmData.Title}</h5>
      <p class="card-text">${filmData.Year}</p>
      <a href="#" class="btn btn-warning btnEdit" data-id="${filmData.id}">Editar</a>
      <a href="#" class="btn btn-danger btnDelete" data-id="${filmData.id}">Borrar</a>
    </div>
  </div>
    `;

  container.appendChild(divCardFilm);
  editFilm(divCardFilm)
  deleteFilm(divCardFilm,container)


}

