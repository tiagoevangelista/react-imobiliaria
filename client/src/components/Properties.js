import React from 'react'

import './Properties.css'

export default function Properties() {
   return(
      <div class="item-box">
         <a href="/" class="item-page">
            <div class="item-image">
               <img src="/items/item2.jpg" alt="Casa Ribeirão Preto" />
            </div>
            <div class="item-type">
               <span class="property-type">Casa de caaaaaaondomínio</span>
               <span class="business-type">Comprar</span>
            </div>
            <div class="item-data">
               <h2 class="property-location"><strong>Ribeirão Preto</strong> (<span>Nova Aliança</span>)</h2>
               <p class="property-price">R$ <span>650.000,00</span></p>
               <div class="property-features">
                  <strong>Área: <span class="feature-area">145m²</span></strong>
                  <strong>Quartos: <span class="feature-bedroom">3</span></strong>
                  <strong>Vagas: <span class="feature-garage">4</span></strong>
                  <strong>Banheiros: <span class="toilet">3</span></strong>
               </div>
            </div>
         </a>
      </div>
   )
}