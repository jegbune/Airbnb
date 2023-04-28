import NavBar from "./component/navbar"
import Heroes from "./component/Heroes"
import Cards from "./component/cards"
import Data from "./data.js"
import "./style.css"

function App() {
  return(
<div> 
  <NavBar />
  <Heroes />
  <Cards
  image = "image-12.png"
  rating = "5.0"
  reviewCount = {6}
  location = "USA"
  title = "Life lessons with Katie Zaferes"
  price = {136}
  />

    

</div>
  )
}

export default App