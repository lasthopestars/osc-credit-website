import "./App.css"
import { Router, Outlet, Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Credit from "./pages/credit"
import Services from "./pages/services"
import Complete from "./pages/complete"
import Register from "./pages/Register"
import { useEffect, useState } from "react"



function App() {
  const [user, setUser] = useState(null)
  const[offsetY, setOffsetY]=useState(0);
  const handleScroll=()=>setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home user={user} />} />
          <Route path="/Register" element={<Register user={user} setUser={setUser} />} /> 
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/credit" element={<Credit user={user} setUser={setUser}/>} />
          <Route path="/services" element={<Services user={user} setUser={setUser} />} />
          <Route path="/complete" element={<Complete user={user} setUser={setUser} />} />
         
        </Route>
      </Routes>
    </div>
  )
}

export default () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
