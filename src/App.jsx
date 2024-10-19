import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from './modules/Admin'
import { Box } from "@mui/material"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box sx={{ flex: 1, p:  4 }}>
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
