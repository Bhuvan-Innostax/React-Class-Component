// Class Component

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase,decrease } from './redux/Actions'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter : {this.props.count}</h1>
        <button onClick={() => {this.props.increase()}}>Increase</button>
        
        <button onClick={() => {this.props.decrease()}}>
          Decrease
        </button>
      </div>
    )
  }
}

  const mapState = (state) => ({
    count : state.counter.count,
  })

  const mapDispatch = {
    increase,
    decrease
  };

  export default connect(mapState,mapDispatch)(App);


















// Functional Component 


// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrease, increase } from './redux/Actions'
// import './App.css'

// export default function App() {
//    console.log(state)
//   const count = useSelector((state) => state.counter.count)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <h1>Counter App with Redux Toolkit</h1>
//       <div><h3>{count}</h3>
        
//         <br/>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increase())}
//         >
//           Increment
//         </button>
//         <button
//           aria-label="decrease value"
//           onClick={() => dispatch(decrease())}
//         >
//           decrease
//         </button>
//       </div>
//     </div>
//   )
// }


