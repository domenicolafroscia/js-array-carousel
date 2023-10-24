### ESERCIZIO   
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.

**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

### SVOLGIMENTO

**Dati**
Creare un array con le immagini fornite

**Logica**
1. Creare un ciclo for per ogni elemento array
2. Creare l'elemento img
3. Mostrare ogni immagine:
    - dapprima mostriamo il primo elemento;
    - a questo primo elemento diamo la classe cur.
4. Settare le freccette (right e left) per lo scorrimento delle immagini
5. Al click sulla freccetta right:
    SE i < (lughezza array - 1):
    - togliere la classe cur dall'elemento;
    - incrementare l'indice;
    - aggiungere la classe cur al nuovo indice.
6. Al click sulla freccetta left:
    SE i > 0:
    - togliere la classe cur dall'elemento;
    - decrementare l'indice;
    - aggiungere la classe cur al nuovo indice.


