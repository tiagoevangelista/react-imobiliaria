import React from 'react'

import './styles.css'

export default function Home() {
   return(
      <div>
         <section className="top-search">
         <div className="container">
            <h2>Procurando casa nova? Vem que a gente ajuda!</h2>
            <h3>os melhores preços da região estão aqui</h3>
            
            <div className="filters-container">
               <div className="filters-box">
                  <label for="">
                     <p>Tipo de busca</p>
                     <select>
                        <option value="" disabled selected>Ex.: Alugar...</option>
                        <option value="comprar">Comprar</option>
                        <option value="alugar">Alugar</option>
                     </select>
                  </label>
                  <label for="">
                     <p>Tipo de busca</p>
                     <select>
                        <option value="" disabled selected>Ex.: Apartamento...</option>
                        <option value="casa-padrao">Casa padrão</option>
                        <option value="casa-condominio">Casa de condomínio</option>
                        <option value="apartamento">Apartamento</option>
                     </select>
                  </label>
                  <label for="">
                     <p>Tipo de busca</p>
                     <input type="text" placeholder="Cidade ou Estado" />
                  </label>
               </div>
               <button type="submit" className="btn-squircle">
                  <i className="fas fa-search"></i>
               </button>
               <button className="btn-squircle lowlighter">
                  <i className="fas fa-filter"></i>
               </button>
            </div>
         </div>
         </section>
      </div>
      )
   }