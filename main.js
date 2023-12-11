import { getFilmApi } from "./src/utils/getFilmApi"
import { postFilmApi } from "./src/utils/postFilmApi"

const url = "http://localhost:4000/films"

const cardsContainer = document.querySelector(".cards")

const inputTitle = document.getElementById("inputTitle")
const inputYear = document.getElementById("inputYear")
const inputType = document.getElementById("inputType")
const inputPoster = document.getElementById("inputPoster")
const btnSend = document.getElementById("btnSend")

getFilmApi(url,cardsContainer)



btnSend.addEventListener("click", (e) => {
    e.preventDefault()
    const filmData = {
        Title: inputTitle.value,
        Year: inputYear.value,
        Type: inputType.value,
        Poster: inputPoster.value,
    }
    console.log(filmData);
    postFilmApi(filmData)
    window.location.reload()
    
})