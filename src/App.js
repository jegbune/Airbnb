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
// import Contact from "./contact";
// import Joke from "./joke.js"
// // import "./style.css"
// import "./style1.css"

function App() {

  // const colors = ["Red", "orange", "Yellow", "Green", "Blue", "Indigo","Violet"]
  const colors = [
  <h3>Red</h3>,
  <h3>Orange</h3>,
  <h3>Yellow</h3>,
  <h3>Green</h3>,
  <h3>Blue</h3>,
  <h3>Indigo</h3>,
  <h3>Violet</h3>
]
//  const list = colors.map(function(item){
//   return item
// })
  
return(
<div>
{colors}
{/* <h3>{list}</h3> */}
  {/* <NavBar />
  <Heroes />
  <Cards
  image = "image-12.png"
  rating = "5.0"
  reviewCount = {6}
  country = "USA"
  title = "Life lessons with Katie Zaferes"
  price = {136}
  />
   <Sample /> */}


  {/* <div className="contacts">
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
  </div> */}
{/* <div>
<Joke
// setup = "I got my daughter a fridge for her birthday."
punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." 
isPun = {true}
upvotes = {10}
downvotes= {2}
comments = {[{author: "", body:"", title:""}]}
/>
<Joke
setup = "I got my daughter a fridge for her birthday."
punchline="I can't wait to see her face light up when she opens it" 
isPun = {false}
/>
<Joke
setup = "How did the hacker escape the police?"
punchline="He just ransomware!" 
isPun = {true}
/>
<Joke
setup = "Why don't pirates travel on mountain roads?"
punchline="Scurvy" 
isPun = {true}
/>
<Joke
setup = "Why do bees stay in the hive in the winter"
punchline="" 
isPun = {true}
/>
</div> */}

</div>

)

}

export default App