// VIA!
let variabile = 'ciao'
const nonCambia = 100

// in JS i valori delle variabili si dividono in PRIMITIVI e COMPLESSI
// tipi primitivi sono:
// - numeri
// - stringhe
// - booleani
// - undefined
// - null

// tipi complessi sono:
// - array
// - oggetti

// OGGETTI
// un oggetto è un valore complesso per un dato che racchiude in un'unica entità
// diverse caratteristiche o proprietà definita da una COPPIA chiave:valore
// di solito un oggetto si dichiara con "const" per ottimizzare la memoria, questo non preclude
// la capacità di poter manipolare o modificare l'oggetto
const dog = {
  // qui dentro inseriamo tutte le caratteristiche del cane, sotto forma di COPPIE chiave:valore
  color: 'black',
  skills: ['play', 'sleep', 'eat'],
  name: 'Poldo',
  age: 5,
}

const property = 'age'

// dog è un oggetto adesso, e posso recuperarne i singoli VALORI utilizzando le CHIAVI
// ad es. per recuperare l'età (5) mi riconduco alla sua chiave ("age")
// a) dot notation
dog.age // 5
// b) square brackets notation
dog['age'] // 5

dog.mood = 'playful' // ho aggiunto una proprietà all'oggetto
delete dog.color // ho eliminato la proprietà "color" da dog
dog.color // undefined

// ARRAY
// un array è anche lui una forma complessa di dato in JS capace di contenere infiniti elementi,
// ma ogni elemento si differenzia dagli altri unicamente per la sua POSIZIONE (non esistono chiavi!)
// anche gli array si dichiarano solitamente con la parola "const" per i motivi precedenti, e tipicamente
// un array contiene elementi tutti dello stesso TIPO (tutti numeri, tutte stringhe, tutti oggetti etc.)

const colors = ['red', 'yellow', 'blue', 'white']
////////////// [  0        1        2       3   ]
// gli array in JS sono zero-based indexed

// il primo elemento di qualsiasi array in JS ha SEMPRE posizione 0
// ogni array in JS è dotato di una proprietà chiamata LENGTH che numericamente riassume quanti elementi contiene
colors.length // 4
// l'ultimo elemento di qualsias array in JS ha SEMPRE posizione length - 1

// gli array in JS permettono di aggiungere/cambiare/eliminare elementi al loro interno, tramite dei metodi predefiniti
colors.push('black') // aggiunge in coda
colors.pop() // rimuove l'ultimo
colors.unshift('green') // aggiunge in cima
colors.shift() // rimuove in cima
colors.splice(2, 0, 'orange') // posizione di inizio, n. di elementi da eliminare, eventuali elementi da agg.

// CICLI
// un ciclo è una struttura capace di RIPETERE una serie di operazioni un numero:
// - a) NON PREDEFINITO di volte
// - b) PREDEFINITO di volte

// il ciclo per eccellenza nelle operazioni di tipo a) è il ciclo WHILE
// il ciclo per eccellenza nelle operazioni di tipo b) è il ciclo FOR

// a)
let risultato = 0

// se la condizione iniziale del ciclo while è true, entriamo nel ciclo
while (risultato < 5) {
  const lancio = Math.ceil(Math.random() * 6) // lancio del D6
  risultato = lancio
  // finite le operazioni nel ciclo, la condizione iniziale viene ri-valutata e se restituisce ancora true, il ciclo riparte
}

// variazione: do-while -> il ciclo comincia a PRESCINDERE, non c'è bisogno che la condizione risultato < 5 sia
// verificata in partenza (infatti viene verificata solo alla fine per RIPETERE il ciclo)
do {
  // faccio cose
  const lancio = Math.ceil(Math.random() * 6) // lancio del D6
  risultato = lancio
} while (risultato < 5)

// ora risultato è sicuramente o 5, o 6

// b)
for (let i = 0; i < 10; i++) {
  // queste istruzioni verranno ripetute 10 volte: questo perchè la i parte da 0 e assumerà un valore valido
  // fino al raggiungimento dell'ultimo valore minore di 10, ovvero 9; da 0-9 corrono 10 iterazioni.
  console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 -> 10 console.log() totali!
}

// questo valore di "i" andrebbe benissimo per esplorare un array di 10 elementi!

// --> il ciclo FOR è perfetto per esplorare gli array, perchè se sfruttiamo la length di un array come
// punto di arrivo per il valore di i otteniamo sempre INDICI VALIDI per l'esplorazione dell'array!

const moreColors = ['tangerine', 'blue', 'indigo', 'limegreen', 'pink']

for (let i = 0; i < moreColors.length; i++) {
  // i vale: 0, 1, 2, 3, 4
  // moreColors[i] vale: 'tangerine', 'blue', 'indigo', 'limegreen', 'pink'
}
