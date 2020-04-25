import React from 'react'

import './styles.css'

import Properties from '../../components/Properties'
import BlogPosts from '../../components/BlogPosts'


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

         <section class="main-content">
        
         <section class="container recommendations">
            <h2>Sugestões para você</h2>
            <h3>Com base no seu histórico de buscas</h3>
            
            <div class="container-items">
               <Properties />
            </div>
            <button class="btn-full">carregar mais</button>
            <div class="separator"></div>
         </section>

         <section class="recently-added container">
            <h2>Recentes</h2>
            <h3>Adicionados recentemente</h3>
            
            <div class="container-items">
               <Properties />
            </div>
            <button class="btn-full">carregar mais</button>
         </section>

         <section class="dark-background alert-notification">
            <div class="container">
               <h2>Não achou o que procurava?</h2>
               <h3>Crie um alerta! Avisaremos quando houver o imóvel ideal para você</h3>
            
               <form action="">
               
               </form>
            </div>
         </section>

         <div class="separator-duo"></div>

         <section class="container">
            <h2>Blog: Dicas</h2>
            <h3>Pra se dar bem na compra & lar</h3>
            
            <div class="blog-container">
               
               <BlogPosts />

            </div>
         </section>

         </section>
        
      </div>
      )
   }