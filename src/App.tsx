import './App.css'
import Menu from './components/Menu'
import { MenuProvider } from './context/Context'
import Main from './components/Main'
import Header from './components/Header'
function App() {


  return (
  <div>
  <MenuProvider>
    <Menu />
    <Header />
    <Main />
  </MenuProvider>
  </div>
  )
}

export default App
