document.getElementById('fetchButton').addEventListener('click', function(){
    fetch('http://localhost:3000/api/mensagem')
    // criando uma tora atraves do addEventListener

    .then(response => response.json())
    // transformando a mensagem em um json
    .then(data => {
        document.getElementById('mensagem').innerText = data.mensagem
        // atribuindo a resposta ao html
    })
    .catch(error =>{
        console.error('Erro ao buscas mensagem!',error)
        // para se der erro
    })
})