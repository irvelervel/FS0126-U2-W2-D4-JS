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

// oggi gli array arrivano con dei metodi INTEGRATI per le loro iterazioni/esplorazioni
// forEach, map, filter, reduce

// forEach è un ciclo for integrato in ogni array: serve per eseguire un'operazione tot volte, avendo
// a disposizione un elemento dell'array alla volta
moreColors.forEach((color, i) => {
  // le operazioni che farò qui dentro verranno ripetute 5 volte
  console.log('CIAO') // 5 volte "CIAO"
  console.log(color) // uno degli elementi dell'array: alla prima iterazione è 'tangerine', alla seconda 'blue' etc.
  // color è come dire moreColors[i] in un ciclo for
  // moreColors[i] è la stessa identica cosa di fare color
  // i è sempre 0, 1, 2, 3, 4
})

const x = moreColors.map((color, i) => {
  // map è un metodo che serve a TRASFORMARE un array iniziale in un NUOVO ARRAY (senza rovinare l'originale)
  return color.toUpperCase()
})

// x è ora un array di 5 colori, ma ogni colore è MAIUSCOLO
// ['TANGERINE', 'BLUE', 'INDIGO', 'LIMEGREEN', 'PINK']

const names = ['stefano', 'robespierre', 'giangiorgio', 'giuletta', 'romeo']

// ora da questo array names voglio creare un array di OGGETTI, in cui in ogni oggetto
// avrò il nome della persona e il suo numero preferito

const characters = names.map((nome) => {
  return {
    name: nome,
    favouriteNumber: Math.ceil(Math.random() * 10), // un numero da 1 a 10
  }
})
// [
//   // characters è un array di oggetti, tipo:
//   {
//     name: 'stefano',
//     favouriteNumber: 5,
//   },
//   {
//     name: 'robespierre',
//     favouriteNumber: 9,
//   },
//   {
//     name: 'giangiorgio',
//     favouriteNumber: 7,
//   },
//   {
//     name: 'giuletta',
//     favouriteNumber: 1,
//   },
//   {
//     name: 'romeo',
//     favouriteNumber: 2,
//   }
// ]

// il metodo filter invece permette di restituire un nuovo array in cui gli elementi NON sono modificati,
// ma in cui possiamo avere MENO elementi dell'originale

const namesConLaG = names.filter((nome) => {
  return nome.charAt(0) === 'g'
})

// namesConLaG ora è -> ['giangiorgio', 'giulietta'] perchè erano gli unici elementi in cui il primo carattere era "g"

const charactersConLaG = characters.filter((character) => {
  return character.name.charAt(0) === 'g'
})

// charactersConLaG ora è -> [{name: 'giangiorgio', favouriteNumber: 7}, {name: 'giuletta', favouriteNumber: 1}]

// reduce è un metodo degli array per ridurre un array ad un singolo valore
// creiamo una stringa orribile con tutti i nomi dei personaggi: "stefanorobespierregiangiorgiogiulettaromeo"

const stringaOrribile = characters.reduce((acc, element) => {
  // acc è il valore che porteremo avanti ad ogni iterazione
  // element è l'elemento corrente, l'oggetto
  return acc + element.name
}, '')

// cronostoria di acc:
// all'inizio è ''
// poi è '' + 'stefano' -> 'stefano'
// poi è 'stefano' + 'robespierre' -> 'stefanorobespierre'
// poi è 'stefanorobespierre' + 'giangiorgio' -> 'stefanorobespierregiangiorgio'
// ecc.

// FUNZIONI
// una funzione è un blocco di codice, dotato di nome, invocabile quante volte si desidera.
// le funzioni in JS si possono definire in diversi modi, i più moderni sono:
// a) scrivere una funzione anonima e assegnarla ad una costante
const presentati = function () {
  console.log('CIAO, sono una funzione')
}

// b) scrivere la funzione con lo stile "arrow function"
const daiLaMano = () => {
  console.log('mi presento, mi chiamo Stefano')
}

// una funzione freccia non possiede un significato interno per parole chiave come "this" e "super"
// per il resto sono sostanzialmente metodi analoghi

// una funzione PRIMA si dichiara, e POI si INVOCA (si lancia)
presentati() // <-- invocazione di funzione, ora la sto ESEGUENDO
daiLaMano() // <-- invocazione di funzione, ora la sto ESEGUENDO

// però ogni tanto le funzioni trovano delle limitazioni nel codice che si trovano ad eseguire, più che altro
// perchè questo codice non può subire variazioni

// la funzione daiLaMano() al momento è in grado solamente di presentarsi a nome Stefano, per utilizzare
// un altro nominativo o creiamo una seconda funzione (sconsigliato, perchè deve fare le stesse cose ma
// solamente utilizzando un nome diverso) oppure togliamo il dato, la parola 'Stefano', e lo sostituiamo
// con un PARAMETRO: un parametro è una sorta di "placeholder", un valore temporaneo che poi verrà rimpiazzato
// dal dato vero e proprio (definito "argomento") che verrà fornito alla funzione durante la sua INVOCAZIONE.

const ioMiChiamo = (nomeFornito = 'Mario') => {
  //   alert('Io mi chiamo ' + nomeFornito) // 'Io mi chiamo Antonio' esempio
  alert(`Io mi chiamo ${nomeFornito}`) // 'Io mi chiamo Antonio' esempio
}

ioMiChiamo('Stefano')
ioMiChiamo('Robespierre')
ioMiChiamo('Romeo')

ioMiChiamo() // 'Io mi chiamo Mario', perchè non avete dato l'argomento per il parametro "nomeFornito"

// VALORI DI RITORNO

// immaginate una funzione che fa un calcolo complesso
// somma due numeri, li eleva al quadrato, e sottrae 17

const complexMath = function (num1, num2) {
  const sommo = num1 + num2
  const elevo = sommo * sommo
  const sottraggo = elevo - 17
  const risultatoFinale = sottraggo
  alert(risultatoFinale)
}

complexMath(50, 72) // 14867

// l'idea è di SPEZZARE complexMath in diversi step; ognuno di questi step farà un'operazione SINGOLA (somma,
// elevazione etc.) e restituisce il risultato del suo pezzettino di calcolo

const somma = function (num1, num2) {
  const risultato = num1 + num2
  return risultato
}

const eleva = function (num1) {
  return num1 * num1
}

const sottrae = function (num1) {
  return num1 - 17
}

sottrae(eleva(somma(50, 72))) // 14867, lo stesso di complexMath() ma ora i pezzi sono distinti e posso anche
// utilizzarli per operazioni scollegate tra di loro

somma(2, 3) // posso anche usare i pezzi singolarmente!

// DOM MANIPULATION
// La manipolazione del DOM (document object model) ci permette di manipolare il contenuto della pagina tramite JS.
// Con JS possiamo creare, eliminare, modificare, applicare stili, CSS, classi, attributi a tutti gli elementi della pagina.
// tutto parte da un oggettone che si chiama "document"

// tipicamente grazie a document parte la fase 1: la RICERCA degli elementi con cui interagire
// 1) ATTRAVERSAMENTO DEL DOM ("DOM traversing")
// per recuperare gli elementi del DOM che ci interessano abbiamo diverse metodologie:
// a) document.getElementById() che ci permette di selezionare un elemento a partire da un id
// b) document.getElementsByClassName che ci permette di selezionare più elementi a partire da una classe
// c) document.getElementsByTagName che ci permette di selezionare più elementi a partire da un nome di tag
// d) document.querySelector() che ci permette di selezionare un elemento a partire da un selettore CSS
// e) document.querySelectorAll() che ci permette di selezionare più elementi a partire da un selettore CSS

const link = document.querySelector('nav ul li:nth-of-type(3)') // il terzo link della barra di navigazione
const section = document.getElementById('hero') // elemento con id="hero"

// 2) MANIPOLAZIONE DEGLI ELEMENTI
// i riferimenti recuperati dai metodi sopra citati sono degli OGGETTI, con un sacco di proprietà e metodi
// a vostra disposizione.
link.innerText // permette di leggere/scrivere il contenuto testuale dell'elemento
link.innerHTML // permette di leggere/scrivere il contenuto HTML dell'elemento
link.classList.add('nuova-classe') // aggiunge una classe CSS
link.classList.remove('nuova-classe') // rimuove una classe CSS
link.classList.toggle('nuova-classe') // aggiunge se manca, toglie se c'è già una classe CSS
link.style.color = 'red' // aggiunge uno stile inline

// creare elementi da zero
const title = document.createElement('h2')
title.innerText = 'Benvenuto ' + characters[1].name

section.appendChild(title)

section.remove()

title.addEventListener('click', function () {
  // al click del titolo, ingrandiscilo
  title.style.transform = 'scale(1.2)'
})
