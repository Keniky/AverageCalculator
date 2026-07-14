import React, { useState } from 'react'
import type { SingleModuleProps } from '../../hooks/useTerms'

type AddTermPanelModuleInputProps = {
    setModulesAvg: React.Dispatch<React.SetStateAction<number[]>>,
    module: SingleModuleProps,
}

const MainPanelModule = ({setModulesAvg, module}: AddTermPanelModuleInputProps) => {
  
    const [td, setTd] = useState(0)
    const [exam, setExam] = useState(0)

    

   return (
    <div className="flex flex-row items-center my-6 mx-4 justify-center text-black font-bold">
        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center pt-2 text-black font-bold "    
            >    
                {module.name}
            </label>

        </div>


        <div className="flex flex-col mx-2">
            {module.exam ? 
                <input 
                type={"text"}
                name="term-exam"
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setExam(value)
                }}
                value={exam}
                className=" 
                    max-w-30 bg-white py-1 px-3 my-2
                    border-none border-black border-solid
                    rounded-lg 
                "
                placeholder='exam...'
                />
                :
                <input 
                    type="text"
                    className="
                        max-w-40  bg-white py-1 px-3 my-2
                        border-none border-black border-solid
                        rounded-lg "
                    placeholder='disabled'
                    disabled
                />
            }
        </div>

        <div className="flex flex-col mx-2">
            {module.td ? 
                <input 
                type={"text"}
                name="term-td"
                value={td}
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setTd(value)
                }}
                className="
                    max-w-30 bg-white py-1 px-3 my-2
                    border-none border-black border-solid
                    rounded-lg 
                "
                placeholder='td...'
                />:
                <input 
                    type="text"
                    className="
                        max-w-40  bg-white py-1 px-3 my-2
                        border-none border-black border-solid
                        rounded-lg "
                        placeholder='disabled'
                    disabled  
                />
            }
        </div>


    </div>
   ) 





}

export default MainPanelModule