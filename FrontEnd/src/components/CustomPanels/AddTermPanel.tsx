import { useEffect, useMemo, useState } from "react"
import { AddTermPanelTextInput } from "./AddTermPanel-TextInput";
import { AddTermPanelModuleInput } from "./AddTermPanel-ModuleInput";
import type { SingleModuleProps } from "../../hooks/useTerms";

const AddTermPanel = () => {
    const [termName, setTermName] = useState('');
    const [arrayOfModules, setArrayOfModules] = useState<SingleModuleProps[]>([])

    const numberOfDisplayedModules = useMemo(() => { 
      return arrayOfModules?.length + 1
    }, [arrayOfModules]);

    
    useEffect(() => {
      console.log(arrayOfModules)
    }, [arrayOfModules])



    async function submitForm(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()
    }
  return ( 
    <div className="absolute inset-0 flex items-center justify-center 
     bg-black/10 backdrop-blur-sm transition-opacity duration-500
     ">
        <div className="overflow-scroll bg-zinc-300 w-192 h-160 rounded-lg shadow-2xl">
          <form onSubmit={submitForm}>
            <AddTermPanelTextInput labelName="Term Input" data={termName} setData={setTermName}/>
            {
              Array.from({length: numberOfDisplayedModules}).map(() => (
                <AddTermPanelModuleInput  setArrayOfModules={setArrayOfModules}/>
              ))
            }
          </form>
        </div>
    </div>
  )
}

export default AddTermPanel