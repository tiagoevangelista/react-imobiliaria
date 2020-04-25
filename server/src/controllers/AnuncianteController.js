const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
   async index(request, response) {
      const anunciantes = await connection('anunciantes') .select('*')

      return response.json(anunciantes)
   },
   
   async create(request, response) {
      const { nome, email, telefone } = request.body
      const id = crypto.randomBytes(4).toString('HEX');
      
      await connection('anunciantes').insert({
         id,
         nome,
         email,
         telefone
      })
      
      return response.json({ id })
   }
}