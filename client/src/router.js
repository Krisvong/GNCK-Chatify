import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Room from "./pages/Room.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chats",
        element: <Chats/>,
      },
       {
        path: "/room/:roomId",
        element: <Room />,
      },
    ],
  },
]);

export default router;
