import { useEffect, useState } from "react";
import getGifs from "../functions/getGifs";


const useFechGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const readGifs = async () => {
        const g = await getGifs(category)
        setGifs(g)
        setIsLoading(false);
    }


    useEffect(() => {
        readGifs();
    }, [])


    return ({
        gifs,
        isLoading
    })
}

export default useFechGifs;