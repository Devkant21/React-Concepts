import './App.css';

const App = () =>  {
  const name = 'Dev'
  // const isNameShowing = false

// Dynamic Name or data showing

//   return (
//     <div className="App">
//       <h1>Hello, {isNameShowing ? name : 'someone'}</h1>
//     </div>
//   );
// }

  return (
    <div className="App">
      <h1>Hello </h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
