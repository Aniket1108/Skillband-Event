
import Home from './components/Home';
import Speaker from './components/Speaker';
import Timing from './components/Timing';
import { Features } from './components/Features'
import { What } from './components/What'
import "./app.css"

function App() {
  return (
    <div className="App">
      <Home/>
      <Timing />
      <Features/>
      <Speaker/>
      <What/>
    </div>
  );
}

export default App;
