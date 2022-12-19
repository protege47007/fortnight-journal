import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import NotFound from "../pages/404"


export default  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
      children: [
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "relationship",
            element: <Contact />
        },
        {
            path: "thoughts",
            element: <Contact />
        },
        {
            path: "reviews",
            element: <Contact />
        },
      ]
    }
  ])