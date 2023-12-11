export function updateFilmAPi(itemData) {
    console.log(itemData.id);
    fetch(`http://localhost:4000/films/${itemData.id}`,{
        method: "PUT",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(itemData)
    })
    .then(resp => {
        if(!resp.ok) throw new Error("Error update Film")
        
        return resp.json()
    })
}
