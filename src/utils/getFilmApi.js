import { renderCardFilm } from "../component/renderCardFilm";

export async function getFilmApi(url,container){
    try{
        const resp = await fetch(url)
        if(!resp.ok) throw new Error("Error get films")
        const data = await resp.json()

        //console.log(data);
        data.map(film => {
            renderCardFilm(container,film)
        })

    }catch(err){
        console.log("Error: ",err.message);
    }
}

__