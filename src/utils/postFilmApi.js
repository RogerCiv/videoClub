export function postFilmApi(data){
    fetch("http://localhost:4000/films",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(resp => {
        if(!resp.ok) throw new Error("Fail create FILM")
    })
}

__