import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Project from "./component/Project";
import Test from './component/Test';


const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      {/* <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"> */}
      <div className="bg-image bg-cover bg-center bg-fixed">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Project />
        </div>
      </div>
    </main>
  );
}

export default App
