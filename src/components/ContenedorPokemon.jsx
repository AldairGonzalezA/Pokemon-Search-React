import { useState } from "react"
import { usePokemon } from "../hooks/usePokemon"

export const ContenedorPokemon = ({infoPoke}) => {
  return (
    <>
      <div>
      {
        infoPoke.map(({nombre,imagen,estadisticas,habilidades})=>{
            <div className="card" style="width: 18rem;">
            <img src={imagen} alt="" />
            <div className="card-body">
                <h5 className="card-title">Nombre</h5>
                <p className="card-text">{nombre}</p>
            </div>
            <ul class="list-group list-group-flush">
                habilidades
                <li className="list-group-item">{{}}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            </div>
        })
      }
      </div>
    </>
  )
}


