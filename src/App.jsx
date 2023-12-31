import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Analytics from "./components/Analytics"
import Newsletter from "./components/Newsletter"
import Cards from "./components/Cards"

function App() {
  return (
    <div className='bg-black h-screen'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  )
}

export default App