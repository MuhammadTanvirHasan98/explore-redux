import './App.css';
import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux';
import store from './Redux/store';
import BurgerContainer from './Components/BurgerContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <CakeContainer/>
       <BurgerContainer/>
    </div>
    </Provider>
  );
}

export default App;