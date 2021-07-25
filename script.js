//Declaração dos Elementos DOM
var a = document.getElementsByName('red')
var c = document.getElementById('p4')
var d = document.getElementById('txt4')
var e = document.getElementById('res')
var f = document.getElementById('res2')
//Variável da Resposta (Redação ou não)
var r = 2
//Funções
function sim() {
  c.style.visibility = 'hidden'
  d.style.visibility = 'hidden'
  r = 1
}
function nao() {
  c.style.visibility = 'visible'
  d.style.visibility = 'visible'
  r = 2
}
a[0].addEventListener('change', sim())
a[1].addEventListener('change', nao())

//Função que calcula a média
function calcular() {
  if (a[0].checked) {
    r = 1
    sim()
  } else {
    r = 2
    nao()
  }
  var tn1 = document.getElementById('txt1')
  var tn2 = document.getElementById('txt2')
  var tn3 = document.getElementById('txt3')
  var tn4 = document.getElementById('txt4')
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var n3 = Number(tn3.value);
  var n4 = Number(tn4.value);
  if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0 || n3 > 10 || n3 < 0 || n4 > 10 || n4 < 0) {
    alert('Erro, alguma nota está com um valor inválido! Digite uma nota entre 0 e 10.')
  } else {
    if (r > 2 || r < 1) {
      alert('Indique se a média que está tentando calcular é de redação!')
    } else {
      if (r == 2) {
        var x = ((n1 + n2) / 2) * 0.6 + n3 * 0.2 + n4 * 0.2 //Calcula a média
      } else if (r == 1) {
        var x = ((n1 + n2) / 2) * 0.6 + n3 * 0.4 //Calcula a média
      }
      var redondo = null
      if (x % 1 >= 0.75) { //Faz o arredondamento
        redondo = x - ((x % 1)) + 1
      } else if (x % 1 >= 0.25) {
        redondo = x - ((x % 1)) + 0.5
      } else if (x % 1 < 0.25) {
        redondo = x - ((x % 1))
      } else if (x % 1 < 0.75) {
        redondo = x - ((x % 1)) + 0.5
      }
      //Corrige a Escrita
      if (x % 1 == 0){
              var g3x = x.toFixed(0).toString().replace(".", ",")
      }else {
              var g3x = x.toFixed(2).toString().replace(".", ",")

      }
      if (redondo % 1 == 0){
          var g3z = redondo.toFixed(0).toString().replace(".", ",")

      }else{
            var g3z = redondo.toFixed(2).toString().replace(".", ",")

      }
     
      //Mostra o Resultado
      e.innerText = 'Sua média é ' + g3x
      f.innerText = 'Sua média arredondada é ' + g3z
    }
  }
}
