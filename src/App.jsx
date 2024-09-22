import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      {/* Resto do seu conteúdo */}
    </div>
  );
}

export default App
