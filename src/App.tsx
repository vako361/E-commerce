import './App.css'
import Menu from './components/Menu'
import { MenuProvider } from './context/Context'
import Main from './components/Main'
import Header from './components/Header'
function App() {


  return (
  <div className='flex flex-col items-center justify-center lg:gap-[90px] lg:pt-11'>
  <MenuProvider>
    <Menu />
    <Header />
    <Main />
  </MenuProvider>
  </div>
  )
}

export default App
