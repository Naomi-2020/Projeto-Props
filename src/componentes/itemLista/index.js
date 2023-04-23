import React from 'react';
import './estilo.css';

export default function ItemLista(props){
  return(
    <div className="boxTime">
      <div className="nomeTime">
        {props.time}
      </div>

      <img className="imagemTime" src={props.imagem} alt={props.time}/>

      <div className="dataFundada">
        {props.dataFundada}
      </div>
    </div>
  )
}