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