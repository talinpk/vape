import dataset from './model/vapes.js';

for(const card of dataset){
  const cardDeck = document.querySelector('.template-c');
  const cartao = createCardView(card);
  cardDeck.insertAdjacentHTML('beforeend', cartao);
}

function createCardView(card){
  return `
    <div class="col">
          <div class="card">
            <img src="img/Vape_2- PNG.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">New vape</h5>
              <p class="card-text">Uma breve descrição do produto</p>
            </div>
          </div>
        </div>
  `;
}

function addCard(name, value){
  if(name === '' || value == ''){
    alert('Dados em branco.');
  }
  else {
    document.querySelector('.template-c').innerHTML = '';
    dataset.push({ coins: name, valor: value });
    alert('Dados inseridos.');

    dataset.map((value) => {
      const cardDeck = document.querySelector('.template-c');
      const cartao = createCardView(value);
      return cardDeck.insertAdjacentHTML('beforeend', cartao);
    });

    // Instruções para limpar o formulário e feichar o modal
    document.getElementById('coin-name').value = '';
    document.getElementById('coin-value').value = '';
    document.getElementById('close-modal').click();
  }
}

const btnSave = document.getElementById('btn-save');

btnSave.addEventListener('click', () => {
  addCard(
    document.getElementById('coin-name').value,
    document.getElementById('coin-value').value
  )
});

