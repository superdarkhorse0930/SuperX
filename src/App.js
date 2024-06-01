import React from 'react'
import './styles/globals.css'
import Libary from './pages/library';
import MainLayout from './components/layout';
function App() {
  return (
    <div >
      <MainLayout>
      <Libary/>
      </MainLayout>
    </div>
  );
}

export default App;
