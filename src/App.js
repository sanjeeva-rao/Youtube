import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Body from './Components/Body';

function App() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
