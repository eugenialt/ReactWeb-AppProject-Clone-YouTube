import  {useState}from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import Favorites from './Pages/FavoritVideo/favorits';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import colorTheme from './hooks/colorTheme';
const App = () =>{
  const [sidebar, setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar= {setSidebar} />
      {colorTheme()}
      <Routes>
        <Route path="/" element={< Home sidebar={sidebar}/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/video/:category/:videoId' element={<Video />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App