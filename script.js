const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('show-menu');
});

document.querySelector('#qtde').addEventListener('change', atualizarPreco);
document.querySelector('#js').addEventListener('change', atualizarPreco);
document.querySelector('#layout-sim').addEventListener('change', atualizarPreco);
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco);
document.querySelector('#prazo').addEventListener('change', () => {
  const prazo = document.querySelector('#prazo').value;
  document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`;
  atualizarPreco();
});

function atualizarPreco () {
  const qtde = document.querySelector('#qtde').value;
  const temJS = document.querySelector('#js').checked;
  const incluiLayout = document.querySelector('#layout-sim').checked;
  const prazo = document.querySelector('#prazo').value;

  let preco = qtde * 100;

  if (incluiLayout) preco += 500;
  if (temJS) preco *= 1.1;

  let taxaUrgencia = (1 - prazo*0.1) * preco;
  preco += taxaUrgencia;

  document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`;
}
 
const loader = document.querySelector('.overlay');

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('disapear') , 1000);
});
