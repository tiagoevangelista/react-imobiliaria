const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
   
   async index(request, response) {
      const { pagina = 1 } = request.query

      const [count] = await connection('imoveis').count()

      const imoveis = await connection('imoveis')
      .join('anunciantes', 'anunciante_id', '=', 'imoveis.anunciante_id')
      .limit(3)
      .offset((pagina - 1) * 3)
      .select([
         'imoveis.*',
         'anunciantes.email',
         'anunciantes.telefone'
      ])

      response.header('X-Total-Count', count['count(*)'])
      return response.json(imoveis)
   },
   
   async create(request, response) {
      const { cidade, bairro, valor, tipo_negociacao, tipo_imovel,area, quartos, banheiros, vagas } = request.body;
      
      const anunciante_id = request.headers.authorization
      
      // const id = crypto.randomBytes(4).toString('HEX');
      
      const [id] = await connection('imoveis').insert({
         cidade,
         bairro,
         valor,
         tipo_negociacao,
         tipo_imovel,
         area,
         quartos,
         banheiros,
         vagas,
         anunciante_id
      });
      
      return response.json({ id });
   },
   
   async delete(request, response) {
      const { id } = request.params
      const anunciante_id = request.headers.authorization
      
      const imovel = await connection('imoveis')
      .where('id', id)
      .select('anunciante_id')
      .first();
      
      if(imovel.anunciante_id !== anunciante_id) {
         return response.status(401).json({ error: 'Operação não autorizada.' })
      }
      
      await connection('imoveis').where('id', id).delete();
      
      return response.status(204).send();
   }
   
}