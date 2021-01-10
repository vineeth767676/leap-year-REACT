import React , {useState} from "react";
import "./styles.css";

export default function App() {

  var [userInput , setUserInput] = useState("")
 
  function inputHandler(event){
    
    var userInput = (event.target.value);
    setUserInput(userInput);

    if ((userInput %100!=0) && (userInput %4==0) || (userInput %400==0)) //leap year math
{
    setUserInput("YaaaY!!!!!! You were born on leap year") //output
}
else
{
  setUserInput("better luck on next birth")
}

  }

  return (
    <div className="App">
      <h1>Leap Year or Not</h1>

      <input onChange = {inputHandler} placeholder = "Enter year" /> 
      
      <h2> {userInput} </h2>
    </div>
    
  );
}
