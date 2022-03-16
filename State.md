## State in React is a plain JS object used by React to represent a piece of information a the components current situation. It is completely managed by the components itself.

import { useState } from 'react';

const App = () => {
  

  <!-- array destructuring .. this is how state works -->

  <!-- useState() is a function -->
  <!-- Whenever a function starts with use at the beginning it's known as HOOK -->

  <!-- Name of the state counter -->
  <!-- Setter function setCounter -->

  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>

      <!-- reference the counter initialised above -->

      <h1>{counter}</h1>
      <button>+</button>

    </div>
  )
}
export default App;

## Event

<!-- An event is an action can be triggered as a result of user action or some kind of system generated events -->

<!-- Button press is an event in react -->
<!-- a Callback function doesn't have a name but it's simply present and waiting for some kind of command -->

onClick={() => alert('clicked)}

alert('clicked)  -  it's an inline function

### Complete code

import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

    </div>
  )
}
export default App;


### Use Effect Hook

import { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // alert('reload')
    //counter = 100 //never modify the state manually. never mutate the state

    // react state can only be change using it's own setter function i.e setCounter in this case

    <!-- counter = 100 is strictly forbidden -->

    //setCounter(100) 

    <!-- this setCounter(100) would keep the counter to 100 even if we increment or decrement it it'll be 100 -->

    <!-- the correct way to write it would be : -->

    setCounter(100);
  }, []) //[] this is known as dependency array

  setCounter(100);
  }, [counter]) //[] this would keep the value at 100 even if we increment or decrement it

  However we could do this instead
  alert("you've changed the code + counter)
  },[counter]) //the user experience won't be good as the alert box would keep popping up with every change in the increment o decrement counter

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

    </div>
  )
}
export default App;