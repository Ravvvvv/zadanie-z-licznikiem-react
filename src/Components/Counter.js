import { useState } from 'react';
import './Counter.css'
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';


const counter = () => {

}

const Counter = (props) => {
    console.log(props);
    // wywoluje koncole zeby sprawdzic czy props jest przekazanyi czy funkcja dziala 
    // useStea pozwal zarzadzac stanem komponentu

    const [counter, setCounter] = useState(props.stala) // stan('string', liczba ,wartosc true logiczna ,tablica[], obiekt {} )
    console.log(setCounter);
    // set funkcja aktualizujaca

    const updateCounter = (akcja) => {
        // () <=parament w funkcji zwrotnej
        console.log(akcja);
        if (akcja === 'dodaj'){
            setCounter(counter + 1);
        } else if  (akcja === 'reset'){
            setCounter(props.stala);
        }else {setCounter(0)} ;
          
        // wazne zeby nazwy bylo zgodne pod przyciskiem i w nazweach
        

       

        console.log('testuje funkcje update Counter');


    }

    return (
        <div className="counter">
            <Display counter={counter} />
            {/* stala jest z app gdzie stala to jest 8  czytaj jest obiektem */}
            <ButtonsPanel updateCounter={updateCounter} />
             {/* funkcja updateCounter tutaj robi za propsa  ktory jest przekazany do butona */}


        </div>
    )
};


export default Counter