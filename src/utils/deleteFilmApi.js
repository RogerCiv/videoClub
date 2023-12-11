

export function deleteFilmApi(filmID){
    return fetch(`http://localhost:4000/films/${filmID}`,{
        method: "DELETE"
    })
    .then(resp => {
        if(!resp.ok) throw new Error("Fail to delete film")
    })

}


