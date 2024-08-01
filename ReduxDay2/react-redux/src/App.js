import './App.css';
import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux';
import store from './Redux/store';
import BurgerContainer from './Components/BurgerContainer';
import UsersContainer from './Components/UsersContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <CakeContainer/>
       <BurgerContainer/>
       <UsersContainer/>
    </div>
    </Provider>
  );
}

export default App;
