import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/store';

function App() {
  
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <div className='flex'>
          <SideBar />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
