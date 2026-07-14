import { useEffect, useId, useMemo, useState } from "react"
import { AddTermPanelTextInput } from "./AddTermPanel-TextInput";
import { AddTermPanelModuleInput } from "./AddTermPanel-ModuleInput";
import { useMutateTerm, type SingleModuleProps } from "../../hooks/useTerms";
import { toast } from "sonner";

type AddTermPanelPros = {
  setIsAddPanel: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTermPanel = ({setIsAddPanel}:AddTermPanelPros) => {
    const [termName, setTermName] = useState('');
    const [arrayOfModules, setArrayOfModules] = useState<SingleModuleProps[]>([])
    const {mutateAsync} = useMutateTerm();


    const numberOfDisplayedModules = useMemo(() => { 
      return arrayOfModules?.length + 1
    }, [arrayOfModules]);

    

    async function submitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        console.log(arrayOfModules)
        try{

          const response = await mutateAsync({termName, modules: arrayOfModules})
          if(!response.ok){
            throw new Error('failed to post term')
          }

          toast.success(' posting data succeded ')
        }catch{
          toast.error('failed to post term')
        }finally{
          setIsAddPanel(false)
        }
    }

  return ( 
    <div className="absolute inset-0 flex items-center justify-center 
     bg-black/10 backdrop-blur-sm transition-opacity duration-500
    text-black font-bold 
     ">
        <div className="overflow-scroll bg-zinc-300 w-192 h-160 rounded-lg shadow-2xl">
          <form 
            className="flex flex-col"
            onSubmit={submitForm}
          >
            <AddTermPanelTextInput labelName="Term Input" data={termName} setData={setTermName}/>
            {
              Array.from({length: numberOfDisplayedModules}).map(() => (
                <AddTermPanelModuleInput  setArrayOfModules={setArrayOfModules}/>
              ))
            }
            <div className="p-1 flex self-center">
              <button 
                className="border border-black border-1 p-1 rounded-lg bg-green-500 flex self-center"
                type="submit"
                >
                Confirm
              </button>

            </div>

          </form>
              <button 
                className="border border-black border-1 ml-3 p-1 rounded-lg bg-red-500 flex self-center"
                onClick={() => {
                  setIsAddPanel(false)
                }}
                >
                Cancel
              </button>
        </div>
    </div>
  )
}

export default AddTermPanel