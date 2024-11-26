import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./modules/Admin";
import { Box } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import AppBar from "./components/AppBar";
import Navbar from "./components/BottomNav";
import { ThemeProvider } from "./context/ThemeContext";
import Event from "./modules/Event/Event";
import Speaker from "./modules/Speaker/Speaker";
import Report from "./modules/Report/Report";
import Notification from "./modules/Notification/Notification";
import Messages from "./modules/Messages/Messages";
import Settings from "./modules/Settings/Settings";

function App() {
  const [open, setOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  const toggleBar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Box
            sx={{
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              overflowX: "hidden",
              // width: '100%',
            }}
          >
            {isDesktop ? (
              <Sidebar toggleBar={toggleBar} open={open} />
            ) : (
              <AppBar />
            )}
            <Box
              sx={{
                flex: 1,
                p: { xs: 1, lg: 4 },
                maxWidth: isDesktop && open ? "calc(100vw - 240px)" : "100%",
              }}
            >
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/events" element={<Event />} />
                <Route path="/speakers" element={<Speaker />} />
                <Route path="/reports" element={<Report />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/Messages" element={<Messages />} />
                <Route path="/Settings" element={<Settings />} />

                <Route path="*" element={<div>Not Found</div>} />
              </Routes>
            </Box>
            {!isDesktop && <Navbar />}
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
