import NavBar from "./component/navbar"
import Heroes from "./component/Heroes"
import Cards from "./component/cards"
import data from "./data.js"
import "./style.css"

function App() {
  const cardElements = data.map(card => {
    return <Cards 
    image = { card.image} 
    rating = { card.rating} 
    reviewCount = { card.reviewCount} location = { card.location} 
    title = { card.title} 
    price = { card.price} 
    />
  })
  return(
<div> 
  <NavBar />
  <Heroes /> 
  <section className="card-list">
    {cardElements}
  </section>  

    

</div>
  )
}

export default App