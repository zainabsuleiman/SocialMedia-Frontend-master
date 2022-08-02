import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/Signup/SignupForm";
 
import LoginForm from './components/Signup/Login/LoginForm';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route    path="/" element={<Home/>}  />
        <Route path="/SignUp"  element={<SignupForm/>} />
        <Route path="/LogIn" element={<LoginForm/>}  />
        {/* <Route element={<Home/> } path="/Home" /> */}
      </Routes>
          </BrowserRouter>
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  );
}

export default App;
