import Navbar from './components/navbar/Navbar'
import Academics from './pages/academics/Academics'
import Achievements from './pages/achievements/Achievements'
import Experiences from './pages/experiences/Experiences'
import Home from './pages/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Research from './pages/research/Research'
import Certification from './pages/certification/Certification'
import Appointment from './pages/appointment/Appointment'
import { AnimatePresence } from 'framer-motion'
import Loading from './components/loading/Loading'
import { useEffect, useState } from 'react'
import Admin from './pages/admin/Admin'
import IsAdmin from './configs/IsAdmin'

function App() {
  const admin = IsAdmin()
  const [isLoading, setIsLoading] = useState(true) // Fetch admin list
  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  let location = useLocation()
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* NAV */}
          <Navbar />

          {/* Routes */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route
                path="academic"
                element={
                  <div className="w-11/12 lg:w-3/4 mx-auto">
                    <Academics />
                  </div>
                }
              />
              <Route
                path="experiences"
                element={
                  <div className="w-11/12 lg:w-3/4 mx-auto">
                    <Experiences />
                  </div>
                }
              />
              <Route
                path="achievements"
                element={
                  <div className="w-11/12 lg:w-3/4 mx-auto">
                    <Achievements />
                  </div>
                }
              />
              <Route
                path="research"
                element={
                  <div className="w-11/12 lg:w-3/4 mx-auto">
                    <Research />
                  </div>
                }
              />
              <Route
                path="certification"
                element={
                  <div className="w-11/12 lg:w-3/4 mx-auto">
                    <Certification />
                  </div>
                }
              />
              <Route path="appointment" element={<Appointment />} />
              <Route
                path="admin"
                element={
                  admin ? (
                    <Admin />
                  ) : (
                    <h1 className="flex justify-center text-center text-3xl m-10">
                      Hi, Hacker!
                    </h1>
                  )
                }
              />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default App
