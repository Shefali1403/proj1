import Header from "../Component/container/Header"
import Footer from "../Component/container/Footer"
import { Outlet } from "react-router-dom"
import Main from "../Component/container/Main"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
function HomePage() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === '/home'){
      navigate("/home/bestsell")
    }
  }, [navigate])
  return (
    <>
        <Header/>
        <Main Child = {<Outlet />}/>
        <Footer/>
    </>
  )
}

export default HomePage