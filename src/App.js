import './App.css';

// const App = () =>  {
//   const name = 'Dev'
  // const isNameShowing = false

// Dynamic Name or data showing

//   return (
//     <div className="App">
//       <h1>Hello, {isNameShowing ? name : 'someone'}</h1>
//     </div>
//   );
// }

//   return (
//     <div className="App">
//       <h1>Hello </h1>
//       {name ? (
//         <>
//           <h1>{name}</h1>
//         </>
//       ) : (
//         <>
//           <h1>test</h1>
//           <h2>There is no name</h2>
//         </>
//       )}
//     </div>
//   );
// }


// Custom Components using props

// const Avenger = (props) => {
//   return (
//     <>
//       <h1>First Name : {props.name}</h1>
//       <h2>Last Name : {props.lastName}</h2>
//       <h3>Powers : {props.powers}</h3>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <div className='App'>
//       {/* This method is lengthy as one change would result in change in all. The best way to go forward is to use the prop */}
//         <Avenger name={'Iron'} lastName={'Man'} powers={'Iron Man Suit'}/>
//         <Avenger name={'Captain'} lastName={'America'} powers={'Super Soldier'}/>
//         <Avenger name={'Incredible'} lastName={'Hulk'} powers={'Green Soldier'}/>
//       </div>
//     </>
//   )
// }

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className='App'>
//       <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

//     </div>
//   )
// }
// export default App;

import { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // alert('reload')
    // counter = 100 //never modify the state manually. never mutate the state

    // react state can only be change using it's own setter function i.e setCounter in this case

    // setCounter(100)
    alert("you've changed the code + counter")
  }, [counter]) //this is known as dependency array

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

    </div>
  )
}
export default App;