import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Footer from '../Footer/Footer'
import { Routes, Route, /* Link */ } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
