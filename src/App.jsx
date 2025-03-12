import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'


const App = () => {
  return (
   <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
    <div className='bg-image fixed inset-0 bg-cover bg-fixed bg-center'>
      <div className='relative z-10'>
        <Navbar />
       <Hero />
      </div>
    </div>
   </main>
  )
}

export default App
