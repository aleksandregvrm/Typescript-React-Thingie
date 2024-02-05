import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout,HomePage,Products, Quiz } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"quiz",
        element:<Quiz/>
      }
    ]
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;