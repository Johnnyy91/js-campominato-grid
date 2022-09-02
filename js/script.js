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

//DISTIGUO AL CLICK CELLE DISPARI E CELLE PARI
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
