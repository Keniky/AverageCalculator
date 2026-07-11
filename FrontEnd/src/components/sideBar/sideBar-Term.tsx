import type { SingleTermProps } from "../../hooks/useTerms";
import { useId } from "../../hooks/useId";

type props = {
    term:SingleTermProps,
}

function SideBarTerm({term}:props){
    const {id, setId} = useId();

    const changeStateOfClicked = () => {
        setId(term.id)
    }

  return (
    <span 
        key={term.id}
        onClick={changeStateOfClicked}
        className={`${ id === term.id ? " bg-red-300 ": "bg-blue-700"} 
                        px-4 py-1 m-1 select-none`}
        >
        {term.name}
    </span>
  )
}

export default SideBarTerm;
