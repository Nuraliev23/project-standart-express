import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import Layout from "./layout/layout";
import Header from "./components/header";
import About from "./pages/about";
import Vacansies from "./pages/vacansies";
import News from "./pages/news";
import Contact from "./pages/contact";


const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {

          index:true,
          element:<About/>
      },
      {

        path:"/vacansies",
        element:<Vacansies/>
    },
      {

        path:"/news",
        element:<News/>
    },
      {

        path:"/contact",
        element:<Contact/>
    },

    ],
    },
  ]);
 


  return <RouterProvider router={router}/>
};

export default App;
