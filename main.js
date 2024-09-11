function Coletar(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

//função para usar os dados coletados 
async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}
//função para exibir os dados 
function ExibirDados(dados){
    document.querySelector('.Endereco').value = dados.localidade
    document.querySelector('.Cidade').value = dados.logradouro
    document.querySelector('.Bairro').value = dados.bairro
}

//função enter
const form = document.querySelector('form')
const submit = document.querySelector('button[type="submit"]')

form.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault()
        submit.click()
}
})