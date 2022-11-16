let criancas = [] //Declara array global

function adicionarCriancas() {
  //Cria referência aos elementos da página
  let inNome = document.getElementById('inNome')
  let inIdade = document.getElementById('inIdade')

  let nome = inNome.value //Obtem conteúdos dos campos
  let idade = Number(inIdade.value)

  //Verifica preenchimento dos campos
  if (nome == ''|| inIdade.value == ''|| isNaN(idade)) {
    alert('Informe os dados corretamente')
    inNome.focus()
    return
  }
  //Adiciona dados ao array de objetos
  criancas.push({nome: nome, idade: idade})

  //Limpa campos e posiciona cursor em inNome
  inNome.value=''
  inIdade.value=''
  inNome.focus()

  listarCarros() //Chama function que lista as crianças 

  //Verifica se o array está vazio
  if (criancas.length == 0) {
    alert('Não há crianças na lista')
    return
  }
  let lista = '' //Concatena lista de crianças

  for (let i = 0; i < criancas.length; i++) {
    lista += criancas[i].nome + ' . ' + criancas[i].idade + ' anos\n'
  }
  

}