import { useState } from "react";
import { useTerms } from "../../hooks/useTerms"
import SideBarTerm from "./sideBar-Term";
import AddTermPanel from "../CustomPanels/AddTermPanel";

const SideBar = () => {

    const [ isAddPanel, setIsAddPanel ] = useState(false);
    const {data : terms}= useTerms();


  return (
    <section className='flex flex-col items-center bg-amber-700 px-15 py-5'>
        <div>
            <button 
                className='bg-green-200 text-black px-4 py-1 mb-4 active:translate-y-1 
                shadow-lg transition-all: duration-300'
                onClick={() => {setIsAddPanel(true)}}                
            > 
            Add Term
            </button>
        </div>
        <div className='flex flex-col '>
            {terms?.map((term) => (
                <SideBarTerm term={term} key={term.id}></SideBarTerm>
            ))}
        </div>

        {isAddPanel ? <AddTermPanel setIsAddPanel={setIsAddPanel}/> : <></>}
    </section>
  )
}

export default SideBar