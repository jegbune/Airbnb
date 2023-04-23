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

// import NavBar from "./component/navbar"
// import Heroes from "./component/Heroes"
// import Cards from "./component/cards"
// import Sample from "./javaScript"
import Contact from "./contact";
// import "./style.css"
import "./style1.css"

function App() {
  return(
<div>
  {/* <NavBar />
  <Heroes />
  <Cards /> */}
  {/* <Sample /> */}


  <div className="contacts">
  <Contact
    img = "./images/mr-whiskerson.jpg"
    name = "Mr. Whiskerson"
    Number = "(212) 555-1234"
    mail = "mr.whiskaz@catnap.meow"
  />
  <Contact
    img = "./images/fluffykins.jpg"
    name = "Fluffykins"
    Number = "(212) 555-2345"
    mail = "fluff@me.com"
    />
  <Contact
    img = "./images/felix.jpg"
    name = "Felix"
    Number = "(212) 555-4567"
    mail = "thecat@hotmail.com"
    />
  <Contact
    img = "./images/pumpkin.jpg"
    name = "Pumpkin"
    Number = "(212) CAT KING"
    mail = "pumpkin@scrimba.com"
    />
  </div>



</div>
  )
}

export default App