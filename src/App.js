import NavBar from "./component/navbar"
import Heroes from "./component/Heroes"
import Cards from "./component/cards"
import data from "./data.js"
import "./style.css"

function App() {
  const cardElements = data.map(card => {
    return <Cards image = { card.image} rating = { card.rating} reviewCount = { card.reviewCount} location = { card.location} title = { card.title} price = { card.price} />
  })
  return(
<div> 
  <NavBar />
  <Heroes />
  {/* <Cards
  image = "image-12.png"
  rating = "5.0"
  reviewCount = {6}
  location = "USA"
  title = "Life lessons with Katie Zaferes"
  price = {136}
  /> */}
  {cardElements}

    

</div>
  )
}

export default App