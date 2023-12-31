import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import ProductDetails from './Components/ProductDetails'

function App() {
  let component
  // eslint-disable-next-line default-case
  switch(window.location.pathname){
    case "/": 
    component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/cart":
      component = <Cart />
      break
      case "productdetails/:id":
        component = <ProductDetails />
        break
  }
  return (
  <>
     <Navbar />
     {component}
  </>
)

}

export default App;
