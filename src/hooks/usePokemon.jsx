import { useState } from "react"
import { reqPoke } from "../service/pokemon"


export const usePokemon = () => {
    const [infoPoke, setInfoPoke] = useState([])

    const handleGetPokemonInfo = async (pokemon,e) =>{
        e.preventDefault()
        await reqPoke(pokemon).then((infoPoke)=>{
            setInfoPoke(infoPoke)
            
        })
    }
  return {
    handleGetPokemonInfo,
    infoPoke
  }
}


