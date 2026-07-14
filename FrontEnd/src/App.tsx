import SideBar from './components/sideBar/sideBar'
import UpperBar from './components/upperBar'
import AverageCalc from './components/AverageCalc'
import { IdContext } from './hooks/useId'
import { useState } from 'react';
import { Toaster } from 'sonner';


function App() {
  
  const [id, setId] = useState('');

  return (
    <IdContext.Provider value={{ id, setId }}>
      <Toaster/>
      <main className='
              h-[100dvh] flex flex-col  sm:max-w-[40rem]
              md:max-w-[60rem] lg:max-w-full
              antialiased font-sans bg-zinc-400 text-white
              '>
        <UpperBar/>
        <section className='h-full flex flex-row'>
          <SideBar/>
          <AverageCalc/>
        </section>
      </main>
  </IdContext.Provider>
  )
}

export default App
