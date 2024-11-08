function OlaMundo() {
    var resultado = document.getElementById("h1_atv1");

    var textoOriginal = resultado.innerHTML;

    setTimeout(function() {
      resultado.innerHTML = "Olá, Mundo";
    }, 0); 

    setTimeout(function() {
      resultado.innerHTML = textoOriginal;
    }, 4000);
  }
function PerguntaNome() {
  var name = prompt("Olá, qual seu nome ?")
    
  var resultado = document.getElementById("h1_atv2");

  var textoOriginal2 = "Null"

  resultado.style.fontSize = "15px"
  resultado.innerHTML = `Olá ${name} seja bem-vindo ao site !!!`;


  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
function NomeSalario() {
    var resultado = document.getElementById("h1_atv3");
    var textoOriginal = resultado.innerHTML;
    var name = prompt("olá, qual seu nome ?");
    var salario = prompt("Qual seu salario ?");


    setTimeout(function() {
        resultado.innerHTML = `olá ${name}, seu salario é ${salario}.`
      }, 0); 
    setTimeout(function() {
        resultado.innerHTML = textoOriginal;
    }, 4000);
}
function somaNumeros() {
  var resultado = document.getElementById("h1_atv4");
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira um numero para somar");
  var valorb = prompt("Insira outro numero para somar");
  
  if (isNaN(valora) || isNaN(valorb)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} e ${valorb} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(somaNumeros, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    var a = parseInt(valora)
    var b = parseInt(valorb)

    var soma = a + b;

    resultado.innerHTML = `O resultado da soma dos numeros ${a} e ${b} é ${soma}`
    resultado.style.fontSize = "15px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}
function mediaNotas() {
  var resultado = document.getElementById("h1_atv5")
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira a primeira nota");
  var valorb = prompt("Insira a segunda nota");

  if (isNaN(valora) || isNaN(valorb)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} e ${valorb} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(mediaNotas, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    var a = parseFloat(valora)
    var b = parseFloat(valorb)

    var media = a + b / 2;

    resultado.innerHTML = `O resultado da sua media dos numeros ${a} e ${b} é ${media}`
    resultado.style.fontSize = "15px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}

function antecessorSucessor() {
  var resultado = document.getElementById("h1_atv6")
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira um numero");

  if (isNaN(valora)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(antecessorSucessor, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    var a = parseInt(valora)

    var antecessor = a - 1;

    var sucessor = a + 1;

    resultado.innerHTML = `O antecessor do numero ${valora} é ${antecessor} e o sucessor é ${sucessor}.`
    resultado.style.fontSize = "15px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}

function dobroTerca() {
  var resultado = document.getElementById("h1_atv7")
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira um numero");

  if (isNaN(valora)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(dobroTerca, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    var a = parseInt(valora)

    var dobro = a * 2;

    var terca = a / 3;

    resultado.innerHTML = `O dobro do numero ${valora} é ${dobro} e sua terça parte é ${terca.toFixed(2)}.`
    resultado.style.fontSize = "15px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}

function distancia() {
  var resultado = document.getElementById("h1_atv8")
  var span = document.getElementById("span")
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira um numero para converter a distancia");

  if (isNaN(valora)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(dobroTerca, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    let km = valora / 1000;
    let hm = valora / 100;
    let dam = valora / 10;
    let dm = valora * 10;
    let cm = valora * 100;
    let mm = valora * 1000;

    let convertido = `
                A distância de ${valora}m corresponde a:
                <ul>
                    <li>${km} Km</li>
                    <li>${hm} Hm</li>
                    <li>${dam} Dam</li>
                    <li>${dm} dm</li>
                    <li>${cm} cm</li>
                    <li>${mm} mm</li>
                </ul>
            `;

    resultado.innerHTML = convertido;
    resultado.style.fontSize = "10px"
    resultado.style.margin = "0"
    span.style.fontSize = "12px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}

function converterDistancia() {
  // Obter o valor digitado em metros
  let metros = parseFloat(document.getElementById('metros').value);
  
  // Verifica se o valor é válido
  if (isNaN(metros) || metros <= 0) {
      alert("Por favor, insira um valor válido maior que 0.");
      return;
  }

  // Realizando as conversões
  let km = metros / 1000;
  let hm = metros / 100;
  let dam = metros / 10;
  let dm = metros * 10;
  let cm = metros * 100;
  let mm = metros * 1000;

  // Exibir os resultados
  let resultado = `
      A distância de ${metros}m corresponde a:
      <ul>
          <li>${km} Km</li>
          <li>${hm} Hm</li>
          <li>${dam} Dam</li>
          <li>${dm} dm</li>
          <li>${cm} cm</li>
          <li>${mm} mm</li>
      </ul>
  `;
  
  // Atualizando o HTML para mostrar os resultados
  document.getElementById('resultado').innerHTML = resultado;
}

function dolar() {
  var resultado = document.getElementById("h1_atv9")
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira um valor em reais");

  if (isNaN(valora)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(dolar, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    var a = parseFloat(valora)

    var conversao = a / 3.45;


    resultado.innerHTML = `O valor ${a.toFixed(2)} convertido em dolar é ${conversao.toFixed(2)}.`
    resultado.style.fontSize = "15px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}
function parede() {
  var resultado = document.getElementById("h1_atv10")
  var textoOriginal = resultado.innerHTML;
  var textoOriginal2 = "Null"
  var valora = prompt("Insira uma altura");
  var valorb = prompt("Insira uma largura");

  if (isNaN(valora)) {
    setTimeout(function() {
      resultado.innerHTML = `ERRO ${valora} e ${valorb} não é um numero !!!`
      resultado.style.fontSize = "15px"
    }, 0)
    setTimeout(dolar, 1000)
  }else{
    setTimeout(function() {
    resultado.innerHTML = textoOriginal;

    var a = parseFloat(valora)
    var b = parseFloat(valorb)

    var conversao = a * b;

    var tinta = conversao / 2;

    resultado.innerHTML = `O tamanho da area é ${conversao} e a tinta necessaria é ${tinta}`
    resultado.style.fontSize = "15px"
  }, 0)
  setTimeout(function() {
    resultado.innerHTML = textoOriginal2;
    resultado.style.fontSize = "28px"
  }, 4000)
  }
}

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
