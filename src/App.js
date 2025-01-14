import './App.css';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store';
import Main from './Components/Main';
function App() {
  
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
