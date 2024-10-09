const express = require('express')
// criando a constante com o express que foi instalado

const cors = require('cors');
// adicionado o pacote cors que foi instalado com npm para resolver o erro

const app = express()
// criando objeto da classe express

const port = 3000;
// a porta onde vai rodar o projeto

// ativando o cors
app.use(cors())

// rota que retorna o json com a mensagem
app.get('/api/mensagem',(req,res) =>{
    res.json({mensagem: 'Olá Mundo!'})
    // direcionando a rota da mensagem e atraves do response
    // atribuir a um json com chave mensagem e ola mundo
})

// iniciando os servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
    // depois no terminal dar um node index.js para ver se esta funcionado
    // no navegador ir para a url http://localhost:3000/api/mensagem ira mostrar o json no navegador ou seja o back esta funcionando
})