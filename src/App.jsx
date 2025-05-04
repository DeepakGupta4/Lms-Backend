import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Mainpage from '../src/pages/Mainpage'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Spinner from './components/Spinner'
import AOS from "aos";
import "aos/dist/aos.css";
import AdminPage from './pages/AdminPage'
import AdminHeader from './components/AdminHeader'
import AdminFooter from './components/AdminFooter'
import AdminDashboard from './pages/AdminDasboard'


const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    

    // Fallback in case something goes wrong
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }) // Maximum 5 seconds loading time

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);

 if (isLoading) return <Preloader />

  const isAdminExact = location.pathname === '/admin'

  return (
    <>
      {!isAdminExact && (location.pathname.startsWith('/admin') ? <AdminHeader /> : <Header />)}

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!isAdminExact && (location.pathname.startsWith('/admin') ? <AdminFooter /> : <Footer />)}
    </>
  )
}

export default App