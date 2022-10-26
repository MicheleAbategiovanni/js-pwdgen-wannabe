const nomeUtente = prompt('Inserisci il tuo nome:')
const cognomeUtente = prompt('Inserisci il tuo cognome:')
const colorePreferito = prompt('Inserisci il tuo colore preferito:')


nome.innerHTML = nomeUtente
cognome.innerHTML = cognomeUtente
colore.innerHTML = colorePreferito


console.log('Primo progetto con JS')
console.log('Il tuo nome è:' + ' ' + nomeUtente)
console.log('Il tuo cognome è:' + ' ' + cognomeUtente)
console.log('Il tuo colore preferito è:' + ' ' + colorePreferito)



password.innerHTML = `${nomeUtente}${cognomeUtente}${colorePreferito}21`
