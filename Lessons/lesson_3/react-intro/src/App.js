//======================================

// ==== Use Functional Component

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//======================================

// ==== Use Functional Component ES6

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App = () => (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

// export default App;

//======================================

// ==== Use Class Component

 import React, {Component} from 'react';
 import logo from './logo.svg';
 import './App.css';
 import Greetings from "./Greetings";
 
 class App extends Component {
   render () {
     return (
      <div className="App">
        <div className="Logo">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              <Greetings firstName="John" lastName="Smith"/>
            </div>
          </header>
        </div>
      </div>
    )
  }
}
export default App;



