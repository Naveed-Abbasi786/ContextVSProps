import './App.css';
import Home from './Components/Props/Home';
import { CardProvider } from './Components/Context/Context';
import Card from './Components/Context/Card';
function App() {
  return (
    <CardProvider>
    <div className="App">
      <div>
        <h1>
        Props
        </h1>
        <Home/></div>
        <div/>
      <div>
        <h1>
     Context
        </h1>
      <Card/>
      </div>
    </div>
    </CardProvider>
  );
}

export default App;
