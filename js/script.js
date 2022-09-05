console.log('JS OK')

//CREO BOTTONE PER UTENTE
const buttonClick = document.getElementById('buttonclick')

//CLICK SU BOTTONE GENERA GRIGLIA
buttonClick.addEventListener('click' ,function(){
    console.log('click');
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; 

//CREO CICLO PER NUMERARE CELLE     
    for (let i = 1 ; i <= 100 ; i++){
        const cell = document.createElement('div');
        cell.innerHTML = i;
        cell.className = 'cell';
        grid.append(cell);

//DISTINGUO AL CLICK CELLE DISPARI E CELLE PARI
        cell.addEventListener('click', function(){
            console.log('click me' , i)
            
            const odd = isNumberOdd(i);
            if(odd){
                cell.classList.add('odd');
            }else{
                cell.classList.add('even');
            }
        })
    }
})

function isNumberOdd(number) {
    return number % 2 === 0;
}


/*
creare un array con 100 elementi(i numeri da 1 a 100)
Entrare in un ciclo che prende un numero casuale da quell'array e lo assegna alla cella, eliminandolo dall'array.
In questo modo ogni volta che entro nell'array pesco un numero e lo elimino, al termine dell'esecuzione avrò distribuito tutti i numeri casualmente.
*/

