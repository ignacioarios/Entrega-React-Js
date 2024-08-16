import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'



function App() {
  return (
    <>
     <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Welcome to Caffé Maledetto!'} />
    </div>
    </>
  )
}

export default App
