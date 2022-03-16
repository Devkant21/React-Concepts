## Without Props :

import './App.css'

const Person = () => {
  return (
    <>
      <h1>Name : Tony</h1>
      <h2>Last Name : Stark</h2>
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


<!-- Using Props -->


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