import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Rooms from "./pages/Rooms/Rooms";
import Room from "./pages/Room/Room";

const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
      path:"/rooms/",
      element:<Rooms/>
    },
    {
      path:"/room/:id",
      element:<Room/>
    },
  ]
  },
]);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
