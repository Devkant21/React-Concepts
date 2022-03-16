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