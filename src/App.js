import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drawer from "./components/drawer/Drawer";
import About from './components/about/About';
import Home from './components/home/Home';
import Library from './components/libray/Library'
import Annales from './components/annales/Annales'
import Planner from './components/planner/Planner'
import Playlists from './components/playlists/Playlists'
import History from './components/history/History'
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Drawer />
        <div className={styles.content}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/annales" element={<Annales />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Home />} /> {/* Adding default route */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
