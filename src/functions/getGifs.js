const getGifs = async (category) => {

    const apiKey = "gmv31RJuDrT2w7S5hgLs7m1mgiY745VS"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
    const { data } = await (await fetch(url)).json();

    const gifs = data.map(
        (img) => ({
            id: img.id,
            title: img.title === "" ? "Undefined" : img.title ,
            url: img.images.downsized_medium.url
        })
    )

    
    return gifs
}

export default getGifs;