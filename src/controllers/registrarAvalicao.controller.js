import fs from 'fs';
import path from 'path';

class RegistrarAvalicao {
  // eslint-disable-next-line class-methods-use-this
  index(req, res) {
    const database = path.join(__dirname, '../database/avaliacoes.txt')
    try {
      const { operadora, filme, avalicaoPSNR, avalicaoSSIM } = req.body;

      const avaliacaoString = `${operadora}, ${filme}, ${avalicaoPSNR}, ${avalicaoSSIM}\n`

      fs.appendFile(database, avaliacaoString, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({'Error': 'Erro ao registrar a avaliação'})
        }

        console.log(`Avaliação registrada em ${database}`)
        res.status(200).json({"sucesso": "Avaliação registrada com sucesso!"})
      })



    } catch (error) {

      res.status(500).send("Dandos Invalidos!")
    }

  }

  validarAvalicao(avalicao) {

  }
}

export default new RegistrarAvalicao();
