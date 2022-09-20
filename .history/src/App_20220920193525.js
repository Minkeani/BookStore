import "./App.css";
import { store } from "./redux";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
