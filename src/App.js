import "./App.css";
import LogIn from "./components/login";
import HomePage from "./components/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LogIn/> } />
        <Route path='/homepage' element={ <HomePage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
