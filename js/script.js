console.log('JS OK')
/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. 
Inoltre emette un messaggio in console con il numero della cella cliccata.
*/

//CREO BOTTONE PER UTENTE
const buttonClick = document.getElementById('buttonclick')

//CLICK SU BOTTONE GENERA GRIGLIA
buttonClick.addEventListener('click' ,function(){
    console.log('click');
    grid.innerHTML = '';  // ???? //

//CREO CICLO PER NUMERARE CELLE     
    for (let i = 1 ; i <= 100 ; i++){
        const cell = document.createElement('div');
        const grid = document.getElementById('grid');
        cell.innerHTML = i;
        cell.className = 'cell';
        grid.append(cell);

//DISTIGUO AL CLICK CELLE DISPARI E CELLE PARI
        cell.addEventListener('click', function(){
            console.log('click me' , i)
            function isNumberOdd (number){
                return number % 2 === 0;
            }
            const odd = isNumberOdd(i);
            if(odd){
                cell.classList.add('odd');
            }else{
                cell.classList.add('even');
            }
        })
    }
})


//NUMERI DA 1 A 100 IN ORDINE RANDOM NELLE CELLE
let x = Math.floor((Math.random() * 100) + 1);
console.log(x);