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

const Person = () => {
  return (
    <>
      <h1>Name : Jane</h1>
      <h2>Last Name : Doe</h2>
      <h3>Age : 32</h3>
    </>
  )
}

const App = () => {
  return (
    <>
      <div className='App'>
      {/* This method is lengthy as one change would result in change in all. The best way to go forward is to use the prop */}
        <Person />
        <Person />
        <Person />

      </div>
    </>
  )
}

export default App;
