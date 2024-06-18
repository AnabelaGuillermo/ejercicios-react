import { createBrowserRouter } from 'react-router-dom';
import RootView from '../views/RootView';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
]);
