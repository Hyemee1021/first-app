import {useState} from 'react'
import { Form } from './Components/Form';
import { RealTime } from './Components/RealTime';
import { Display } from './Components/Display';

export const  Header = () => {
   
    const [counter, setCounter] = useState(0);
    const [textValue, setTextValue] = useState("");
    const [displayText, setDisplayText] = useState("");
    // decrease  the value of counter
        const handleDecrement = () => {
            setCounter(counter - 1)
        }
        //increase  the value of counter
        const handleIncrement = () => {
            setCounter(counter + 1)
        }
// class work
// add a button that increment the value by 2 
// add a button that reset a counter value to zero

// handles the on change of input field
        const handleChange = (event) => {
            console.log(event)
            setTextValue(event.target.value)
        }

        // handles the on submit of the form
        const onSubmitValue = (event) => {
            // removes the default refresh behaviour
           event.preventDefault();
           setDisplayText(textValue)
        }
    return (
    <>
        <h1>Counter application</h1>
        <h3>Initial Value: {counter}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        {/* <hr/>
        <h1>Controlled input field</h1>
        <form onSubmit={onSubmitValue}>
            <input type='text' value={textValue} onChange={handleChange}/>
            <button type="submit">Submit</button>
            <h4>Real time typing: {textValue}</h4>
            <h4>Text after submit: {displayText}</h4>
        </form> */}
         <hr/>
        <h1>Props and Components</h1>
        <Form value={textValue} onSubmitValue={onSubmitValue} handleChange={handleChange}/>
        <RealTime value={textValue}/>
        <Display value={displayText}/>     
     </>
)
}