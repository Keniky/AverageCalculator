import { useState } from "react";
import type { SingleTermProps } from "../../hooks/useTerms";

type props = {
    term:SingleTermProps,
    currentId: string,
    setCurrentId: React.Dispatch<React.SetStateAction<string>>,
}

function SideBarTerm({term, currentId, setCurrentId}:props){

    const changeStateOfClicked = () => {
        setCurrentId(term.id)
    }

  return (
    <span 
        key={term.id}
        onClick={changeStateOfClicked}
        className={`${ currentId === term.id ? " bg-red-300 ": "bg-blue-700"} 
                        px-4 py-1 m-1 select-none`}
        >
        {term.name}
    </span>
  )
}

export default SideBarTerm;
