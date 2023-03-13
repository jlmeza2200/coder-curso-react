import {Navbar, ItemListContainer, Hero} from './components'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ItemListContainer greeting={'Catálogo de productos. Próximamente...'}/>
    </>
  )
}

export default App
