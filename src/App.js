import './App.css';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store';
import Main from "./Components/Main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import Watch from "./Components/Watch"

const RouterApp = () => {
  return <div>
    <Header />
    <Main />
  </div>
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouterApp />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/watch/:videoId",
        element: <Watch />
      }
    ]
  }
])

function App() {
  
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
