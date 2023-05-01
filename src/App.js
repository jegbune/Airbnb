import NavBar from "./component/navbar"
import Heroes from "./component/Heroes"
import Cards from "./component/cards"
import data from "./data"
import "./style.css"
// import Cart from "./cart"
// import element from "./element"
function App() {
  // const elementList = element.map(list => {
  //   return(
  //     <Cart
  //     {...list}
  //     // list = {list}
  //       // title = {list.title} 
  //       // price = {list.price}
  //       // openSpot = {list.openSpot}
  //     />
  //   )
  // })
 

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
      // item = {item}
      {...item}
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
{/* <Cart /> */}
{/* <Cart
  title= "This is another paragraph"
  /> */}
{/* <div>
    {elementList}

</div> */}

</div>
  )
}

export default App