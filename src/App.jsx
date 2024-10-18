// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Dashboard from './modules/Admin'
import { Box } from "@mui/material"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p:  4 }}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </>
  )
}

export default App
