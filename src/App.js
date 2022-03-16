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


// Custom Components

const Avenger = (props) => {
  return (
    <>
      <h1>First Name : {props.name}</h1>
      <h2>Last Name : {props.lastName}</h2>
      <h3>Powers : {props.powers}</h3>
    </>
  )
}

const App = () => {
  return (
    <>
      <div className='App'>
      {/* This method is lengthy as one change would result in change in all. The best way to go forward is to use the prop */}
        <Avenger name={'Iron'} lastName={'Man'} powers={'Iron Man Suit'}/>
        <Avenger name={'Captain'} lastName={'America'} powers={'Super Soldier'}/>
        <Avenger name={'Incredible'} lastName={'Hulk'} powers={'Green Soldier'}/>
      </div>
    </>
  )
}

export default App;
