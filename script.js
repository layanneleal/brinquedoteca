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

  listarCriancas() //Chama function que lista as crianças 

  //Verifica se o array está vazio
  if (criancas.length == 0) {
    alert('Não há crianças na lista')
    return
  }
  let lista = '' //Concatena lista de crianças

  for (let i = 0; i < criancas.length; i++) {
    lista += criancas[i].nome + ' . ' + criancas[i].idade + ' anos\n'
  }
  //Exibe lista em uma única instrução
  document.getElementById('outLista').textContent = lista
}
let btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCriancas)

function resumirLista() {
  //Verifica se o vetor está vazio
  if (criancas.length == 0) {
    alert('Não há crianças na lista')
    return
  }

  let copia = criancas.slice() //Cria uma cópia do array crianças
  //Ordena o array cópia pela idade
  copia.sort(function(a, b) {return a.idade - b.idade})

  let resumo = '' //Concatena saída

  let aux = copia[0].idade //Menor idade do array ordenado
  let nomes = [] //Array para inserir nomes de cada idade

  //Percorre os elementos do array (classificado por idade)
  for (let i = 0; i < copia.length; i++) {
    //Se é da mesma idade auxiliar, adiciona ao array
    if (copia[i].idade == aux) {
      nomes.push(copia[i].nome)
    }else{
      //Senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
      resumo += aux + ' ano(s): ' + nomes.length + ' criança(s) -'
      resumo += (nomes.length / copia.length * 100).toFixed(2) + '%\n'
      resumo += '(' + nomes.join(', ') + ')\n\n'
      aux = copia[i].idade //Obtem a nova idade na ordem
      nomes = [] //Limpa os arrays dos nomes

      nomes.push(copia[i].nome) //Adiciona o primeiro da nova idade
    }
  }
      //Adiciona os nomes da última idade ordenada
      resumo += aux + ' ano(s): ' + nomes.length + ' criança(s) - '
      resumo += (nomes.length / copia.length * 100).toFixed(2) + '%\n'
      resumo += '(' + nomes.join(', ') + ')\n\n'

      //Altera conteúdo de outlista
      


 

}