import React, { useState } from "react";

 function Que1() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState("");





  const handleAddition = (e) => setResult((parseInt(first)) +(parseInt( second)));
  const handleSubtract= (e) => setResult((parseInt(first)) -(parseInt( second)));;
  
  const handleMultiply = (e) => setResult((parseInt(first)) *(parseInt( second)));;
  const handleDivide = (e) => setResult((parseInt(first)) /(parseInt( second)));;

  return (
    <>
      <div>
        <label htmlFor="first">First Number:-</label>
        <input type="number"
           onChange={(e)=>setFirst(e.target.value)}
         
          value={first}
          name="first"
        />

        
        
      </div>
      <br/>
      <div>
        <label htmlFor="second">Second Number:-</label>
        <input  type="number"
          
          onChange={(e)=>setSecond(e.target.value)}
          value={second}
          name="second"
        />

       
      </div>
      <br/>
      
      <div>
      <button onClick={handleAddition}>Addition</button> <br/>
      <button onClick={handleSubtract}>Subtract</button> <br/>
        <button onClick={handleMultiply}>Multiply</button> <br/>
        <button onClick={handleDivide}>Divide</button> <br/>
      </div>
      <div>The Result is: {result}</div>
  </>
  );
}

export default Que1;