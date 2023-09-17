import './App.css'
import Cards from "./components/Cards.jsx"
import characterData from './data.js';

function App() {
  return (
    <div>
<Cards characters={characterData} />
    </div>
  )
}

export default App;
