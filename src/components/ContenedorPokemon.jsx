import { useState } from "react"
import { usePokemon } from "../hooks/usePokemon"

export const ContenedorPokemon = ({infoPoke}) => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center alig-items-center row row-cols-2 p-2">
      {
        infoPoke.map(({nombre,imagen,estadisticas,habilidades})=>{
            return(
                <div className="card" style="width: 18rem;">
            <img src={imagen} alt="" />
            <div className="card-body">
                <h5 className="card-title">Nombre</h5>
                <p className="card-text">{nombre}</p>
            </div>
            <ul class="list-group list-group-flush">
                {
                    estadisticas.map(({nombre,base})=>{
                        <li className="list-group-item">{nombre}{base}</li>
                        
                    })
                }
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            </div>
            )
        })
      }
      </div>
    </>
  )
}


