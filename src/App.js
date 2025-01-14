import './App.css';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store';
import Main from './Components/Main';
import Body from "./Components/Body"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watch from './Components/Watch';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
       element: <Body/>,
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
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
