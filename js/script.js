// Seleziono gli elementi
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

// Valore iniziale del counter
let count = 0;

// Funzione per aggiornare il counter
function updateCounter() {
    counterValue.textContent = count;
}

// Aumento il valore del counter
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Diminuisco il valore del counter
decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});