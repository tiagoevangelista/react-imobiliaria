import React, { useState, useEffect } from 'react'
import api from '../services/api'

import './Properties.css'

export default function Properties() {
   const [imoveis, setImoveis] = useState([]);

   useEffect(() => {
      api.get('imoveis').then(response => {
         setImoveis(response.data)
      })
   }, []);

   return(
      <div className="container-items">
         {imoveis.map(imovel => (
            <div key={imovel.id} className="item-box">
               <a href="/" className="item-page">
                  <div className="item-image">
                     <img src="/items/item2.jpg" alt="Casa Ribeirão Preto" />
                  </div>
                  <div className="item-type">
                     {imovel.id}
                     <span className="property-type">{imovel.tipo_imovel}</span>
                     <span className="business-type">{imovel.tipo_negociacao}</span>
                  </div>
                  <div className="item-data">
                     <h2 className="property-location"><strong>{imovel.cidade}</strong> (<span>{imovel.bairro}</span>)</h2>
                     <p className="property-price"><span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(imovel.valor)}</span></p>
                     <div className="property-features">
                        <strong>Área: <span className="feature-area">{imovel.area}m²</span></strong>
                        <strong>Quartos: <span className="feature-bedroom">{imovel.quartos}</span></strong>
                        <strong>Vagas: <span className="feature-garage">{imovel.vagas}</span></strong>
                        <strong>Banheiros: <span className="toilet">{imovel.banheiros}</span></strong>
                     </div>
                  </div>
               </a>
            </div>
         ))}
      </div>
   )
}