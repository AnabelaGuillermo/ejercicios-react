import { createBrowserRouter } from 'react-router-dom';
import RootView from '../views/RootView';
import App from '../App';
import Ejercicio6 from '../views/Ejercicio6';
import Ejercicio9 from '../views/Ejercicio9';
import Ejercicio10 from '../views/Ejercicio10';
import Ejercicio11 from '../views/Ejercicio11';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'ejercicio6',
        element: <Ejercicio6 />,
      },
      {
        path: 'ejercicio9',
        element: <Ejercicio9 />,
      },
      {
        path: 'ejercicio10',
        element: <Ejercicio10 />,
      },
      {
        path: 'ejercicio11',
        element: <Ejercicio11 />,
      },
    ],
  },
]);
