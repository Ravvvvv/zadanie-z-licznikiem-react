
import './ButtonsPanel.css'
const ButtonsPanel = (props)=> {
    return(
        <div className="buttons-panel">
                <button onClick={()=>props.updateCounter('dodaj')}>Dodaj</button>
                {/* rodzica  do dziecka parament funkcji ktora zostal przekazana */}
                <button onClick={()=>props.updateCounter('reset')}>Reset</button>
                <button onClick={()=>props.updateCounter('zero')}>Zero</button>
            </div>
    )
};


export default ButtonsPanel;