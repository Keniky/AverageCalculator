import SideBar from './components/sideBar/sideBar'
import UpperBar from './components/upperBar'
import AverageCalc from './components/AverageCalc'


function App() {

  return (
    <main className='
            h-[100vh] flex flex-col  sm:max-w-[40rem]
            md:max-w-[60rem] lg:max-w-full
            antialiased font-sans bg-zinc-400 text-white
            '>
      <UpperBar/>
      <section className='h-full flex flex-row'>
        <SideBar/>
        <AverageCalc/>
      </section>
    </main>
  )
}

export default App
