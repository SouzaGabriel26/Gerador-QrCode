import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Teste from "./Teste"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import Cardapio from "./Cardapio"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Teste />,
  },
  {
    path: "/menu",
    element: <Cardapio />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
