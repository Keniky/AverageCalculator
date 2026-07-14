import React, { useState } from 'react'
import type { SingleModuleProps } from '../../hooks/useTerms'

type AddTermPanelModuleInputProps = {
    setModulesAvg: React.Dispatch<React.SetStateAction<number[]>>,
    module: SingleModuleProps,
}

const MainPanelModule = ({setModulesAvg, module}: AddTermPanelModuleInputProps) => {
  
    const inputType: string = "text"
    const [name, setName] = useState('')
    const [td, setTd] = useState(0)
    const [exam, setExam] = useState(0)
    const [coff, setCoff] = useState('1')


   return (
    <div className="flex flex-row items-center my-6 mx-4 justify-center">

        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >    
                 Module Name 
            </label>
            <label
                className="flex flex-row justify-center pt-2 text-black font-bold "    
            >    
                {module.name}
            </label>

        </div>


        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >
                 td
            </label>
            {module.td ? 
                <input 
                type={"text"}
                name="term-td"
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setTd(value)
                }}
                className="
                max-w-40 w-5 h-5 bg-white py-1 px-3 my-2
                border-none border-black border-solid
                rounded-lg 
                "
                />:
                <input disabled/>
            }
        </div>

        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >
                 exam
            </label>
            {module.td ? 
                <input 
                type={"text"}
                name="term-td"
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setExam(value)
                }}
                className="
                max-w-40 w-5 h-5 bg-white py-1 px-3 my-2
                border-none border-black border-solid
                rounded-lg 
                "
                />:
                <input disabled/>
            }
        </div>


    </div>
   ) 





}

export default MainPanelModule