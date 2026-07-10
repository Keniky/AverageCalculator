import { useState } from "react";
import { useTerms, type TermProps } from "../../hooks/useTerms"
import SideBarTerm from "./sideBar-Term";

const SideBar = () => {

    const {data : terms}= useTerms();
    const [currentId, setCurrentId] = useState('')

    console.log(terms)
  return (
    <section className='flex flex-col items-center bg-amber-700 px-15 py-5'>
        <div>
            <button className='bg-green-200 text-black px-4 py-1 mb-4 active:translate-y-1 
            shadow-lg transition-all: duration-300'
                > 
                addSection 
            </button>
        </div>
        <div className='flex flex-col '>
            {terms?.terms.map((term) => (
                <SideBarTerm term={term} currentId={currentId} setCurrentId={setCurrentId}></SideBarTerm>
            ))}
        </div>
    </section>
  )
}

         <div className="flex flex-col">
      </div>
export default SideBar