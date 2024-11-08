function efeito() {
    var elemento = document.getElementById("paii");
    var botao = document.getElementById("btn");
  
    if (elemento.classList.contains("pai")) {
      console.log("Ativado");
      botao.textContent = "EFEITO ATIVO";
      elemento.classList.remove("pai");
      elemento.classList.add("pai2");
    } else {
      console.log("Desativado");
      botao.textContent = "EFEITO DESATIVADO";
      elemento.classList.remove("pai2");
      elemento.classList.add("pai");
    }
  }

  function M20() {
    var resultado = document.getElementById("h1_atv1")
    var textoOriginal = "Null"
    var numero = prompt("Escreva um numero")

    if(isNaN(numero)) {
        setTimeout(function() {
            resultado.innerHTML = `ERRO ${numero} não é um numero !!!`
            resultado.style.fontSize = "15px"
        }, 0)
        setTimeout(M20, 1000)
    }else{
        numero = parseInt(numero)

        if(numero > 20) {
            resultado.innerHTML = `O numero ${numero} é maior que 20`
            resultado.style.fontSize = "20px"
        }else{
            resultado.innerHTML = `O numero ${numero} não é maior que 20`
            resultado.style.fontSize = "20px"
        }
    }
    setTimeout(function() {
        resultado.innerHTML = textoOriginal
        resultado.style.fontSize = "28px"
    }, 4000)
  }

  function M10() {
    var resultado = document.getElementById("h1_atv2")
    var textoOriginal = "Null"
    var numero = prompt("Escreva um numero")

    if(isNaN(numero)) {
        setTimeout(function() {
            resultado.innerHTML = `ERRO ${numero} não é um numero !!!`
            resultado.style.fontSize = "15px"
        }, 0)
        setTimeout(M10, 1000)
    }else{
        numero = parseInt(numero)

        if(numero > 10) {
            resultado.innerHTML = `O numero ${numero} é maior que 10`
            resultado.style.fontSize = "20px"
        }else{
            resultado.innerHTML = `O numero ${numero} não é maior que 10`
            resultado.style.fontSize = "20px"
        }
    }
    setTimeout(function() {
        resultado.innerHTML = textoOriginal
        resultado.style.fontSize = "28px"
    }, 4000)
  }

//   função para verificar numero

function verificarNumero(input) {
    return !isNaN(input) && input.trim() !== '';
}

  function ABC() {
    var resultado = document.getElementById("h1_atv3")
    var textoOriginal = "Null"
    var a = prompt("Escreva um valor 'A'")
    var b = prompt("Escreva um valor 'B'")
    var c = prompt("Escreva um valor 'C'")

    if(!verificarNumero(a) ||!verificarNumero(b)||!verificarNumero(c)) {
        setTimeout(function() {
            resultado.innerHTML = `ERRO "${a}" e "${b}" e "${c}" não são um <br> numero !!!`
            resultado.style.fontSize = "15px"
        }, 0)
        setTimeout(ABC, 1000)
    }else{
        a = parseInt(a)
        b = parseInt(b)
        c = parseInt(c)

        var soma = a + b;

        if(soma > c) {
            resultado.innerHTML = `a soma dos numeros ${a} e ${b} é maior que ${c}`
            resultado.style.fontSize = "20px"
        }else{
            resultado.innerHTML = `a soma dos numeros ${a} e ${b} não é maior que ${c}`
            resultado.style.fontSize = "20px"
        }
    }
    setTimeout(function() {
        resultado.innerHTML = textoOriginal
        resultado.style.fontSize = "28px"
    }, 4000)
  }

  function AB() {
    var resultado = document.getElementById("h1_atv4")
    var textoOriginal = "Null"
    var a = prompt("Escreva um valor 'A'")
    var b = prompt("Escreva um valor 'B'")

    if(!verificarNumero(a) ||!verificarNumero(b)) {
        setTimeout(function() {
            resultado.innerHTML = `ERRO "${a}" e "${b}" não são um numero !!!`
            resultado.style.fontSize = "15px"
        }, 0)
        setTimeout(AB, 1000)
    }else{
        a = parseInt(a)
        b = parseInt(b)

        var soma = a + b;

        if(soma > 10) {
            resultado.innerHTML = `a soma dos numeros ${a} e ${b} é maior que 10`
            resultado.style.fontSize = "20px"
        }else{
            resultado.innerHTML = `a soma dos numeros ${a} e ${b} não é maior que 10`
            resultado.style.fontSize = "20px"
        }
    }
    setTimeout(function() {
        resultado.innerHTML = textoOriginal
        resultado.style.fontSize = "28px"
    }, 4000)
  } 

const toggleButton = document.getElementById('toggle-btn');
const extraContent = document.getElementById('paii');

toggleButton.addEventListener('click', function() {
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
        toggleButton.textContent = 'Esconder informações';
        window.location.reload();
    } else {
        extraContent.style.display = 'none';
        toggleButton.textContent = 'Mostrar informações';
    }
});