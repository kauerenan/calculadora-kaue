const botaoAdicao = document.querySelector('#botaoAdicao');

botaoAdicao.addEventListener('click', () => {

  const inputPrimeiroNumero = Number(document.querySelector('#inputPrimeiroNumero').value);
  const inputSegundoNumero = Number(document.querySelector('#inputSegundoNumero').value);


  const resultado = inputPrimeiroNumero + inputSegundoNumero;

  const mostrarResultado = document.querySelector('#mostrarResultado');
  mostrarResultado.innerText = `Seu Resultado é: ${resultado}`;


  
});

const botaoSubtracao = document.querySelector('#botaoSubtracao');

botaoSubtracao.addEventListener('click', ()=>{

    const primeiroNumero = Number(document.querySelector('#inputPrimeiroNumero').value);
    const segundoNumero = Number(document.querySelector('#inputSegundoNumero').value);

    const resultado = primeiroNumero - segundoNumero;
    
    const mostrarResultado = document.querySelector('#mostrarResultado');
    mostrarResultado.innerText = `Seu Resultado é: ${resultado}`;

});

const botaoMultiplicacao = document.querySelector('#botaoMultiplicacao');

botaoMultiplicacao.addEventListener('click', ()=>{

    const primeiroNumero = Number(document.querySelector('#inputPrimeiroNumero').value);
    const segundoNumero = Number(document.querySelector('#inputSegundoNumero').value);

    const resultado = primeiroNumero * segundoNumero;
    const mostrarResultado = document.querySelector('#mostrarResultado');
    mostrarResultado.innerText = `Seu Resultado é: ${resultado}`;

});

const botaoDivisao = document.querySelector('#botaoDivisao');

botaoDivisao.addEventListener('click', ()=>{

const primeiroNumero = Number(document.querySelector('#inputPrimeiroNumero').value);
const segundoNumero = Number(document.querySelector('#inputSegundoNumero').value);

const resultado = primeiroNumero / segundoNumero;

const mostrarResultado = document.querySelector('#mostrarResultado');
mostrarResultado.innerText = `Seu Resultado é: ${resultado}`;

});

const botaoLimpar = document.querySelector('#botaoLimpar');

botaoLimpar.addEventListener('click', () => {
  document.querySelector('#inputPrimeiroNumero').value = '';
  document.querySelector('#inputSegundoNumero').value = '';

  const mostrarResultado = document.querySelector('#mostrarResultado');
  mostrarResultado.innerText = 'Seu Resultado vai Aparecer aqui!';
});


