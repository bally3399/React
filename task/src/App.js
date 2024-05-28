import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";


function App() {
  return (
      <>
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route element={<Login/>} path={"/login"}/>
                  <Route element={<SignUp/>} path={"/signUp"}/>
              </Route>
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
