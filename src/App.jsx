import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from './modules/Admin'
import { Box } from "@mui/material"
import { Sidebar } from "./components/Sidebar"
import AppBar from "./components/AppBar";

function App() {
  const isDesktop = window.innerWidth >= 1200

  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column' }}>
          {isDesktop ? (
            <Sidebar />
          ) : (
            <AppBar />
          )}
          <Box sx={{ flex: 1, p:  { xs: 1, lg: 4 } }}>
              <Routes>
                <Route index element={<Dashboard />} />
              </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
