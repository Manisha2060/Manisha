
import React, { useState } from 'react';



 

  function App() {

    let [counter, setCounter] =useState(15)

    // let counter =15

    const addValue=()=>{
      counter=counter+1
      setCounter(counter)
    }
    // const[ click, setclick] = useState(0);
    return (
    //   <div> 
    //     <p>You clicked {click} times</p>

    //     <button onClick={() => setclick(click + 1)}>
    //      Click Me 

    //     </button>
    //   </div>
<>

    <h1> Learning</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add value</button><br/>
    <button>Remove Value</button>
    </>
    );
  }
  
  export default App;