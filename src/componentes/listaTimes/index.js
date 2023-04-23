import React from 'react'
import Titulo from '../titulo'
import ItemLista from '../itemLista'
import './estilo.css'

export default function ListaTimes() {
  return (
    <div>
      <Titulo />

      <div className="lista">
        <ItemLista
          time="Corinthians"
          dataFundada="01/09/1910"
          imagem="/img/corinthians.png"
        />

        <ItemLista
          time="São Paulo"
          dataFundada="25/01/1930"
          imagem="/img/sao-paulo.png"
        />

        <ItemLista
          time="Santos"
          dataFundada="14/04/1912"
          imagem="/img/santos.png"
        />

        <ItemLista
          time="Palmeiras"
          dataFundada="26/08/1914"
          imagem="/img/palmeiras.png"
        />

        <ItemLista
          time="Flamengo"
          dataFundada="17/11/1895"
          imagem="/img/flamengo.png"
        />

<ItemLista
          time="Fluminese"
          dataFundada="21/07/1902"
          imagem="/img/fluminense.png"
        />

<ItemLista
          time="Internacional"
          dataFundada="04/04/1909"
          imagem="/img/internacional.png"
        />
      </div>
    </div>
  )
}
