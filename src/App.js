import NavBar from "./component/navbar"
import Heroes from "./component/Heroes"
import Cards from "./component/cards"
import data from "./data"
import "./style.css"

function App() {
  
  // image = {item.image} 
  //     rating = { item.rating} 
  //     reviewCount = { item.reviewCount}
  //     location = { item.location} 
  //     title = { item.title} 
  //     price = { item.price} 
  //     openSpots = {item.openSpots }
  const card = data.map(item => {
    return (
    <Cards 
      item = {item}
    />
    )
  })
  return(   
<div> 
  <NavBar />
  <Heroes /> 
  <section className="card-list">
    {card}
  </section>  

    

</div>
  )
}

export default App