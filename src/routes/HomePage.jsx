import Header1 from "../Component/container/Header1"
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
        <Header1/>
        <Main Child = {<Outlet />}/>
        <Footer/>
    </>
  )
}

export default HomePage