import './App.css';
import {store} from './redux'
import { Provider } from "react-redux";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
