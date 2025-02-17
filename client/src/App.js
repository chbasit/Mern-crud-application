import './App.css';
import { AddUser } from './components/addUser/AddUser';
import { Edit } from './components/updateUser/Edit';
 import User from './components/getUser/User';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element:  <User/>,
  },
  {
    path:"/add",
    element:<AddUser/>,
  },
 
  {
    path:"/edit/:id",
    element:<Edit/>,
  }
])

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
