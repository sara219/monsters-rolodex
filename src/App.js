import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
     monster: [
       {
         name: 'Linda'
       },
       {
         name: 'Frank'
       }, 
       {
         name: 'Jacky'
       }
     ]
  }
}
  render() {
    return (
    <div className='App'>
      {/* iterate over the monster array and print the name (obj.name === monster.name) */}
    {      
      this.state.monster.map((monster) => {
        return <h1>{monster.name}</h1>
      })
    }
    </div>
    )
  }
}

export default App
