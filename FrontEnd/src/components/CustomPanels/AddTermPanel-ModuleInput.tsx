import { useState } from "react"
import type { SingleModuleProps } from "../../hooks/useTerms";

type AddTermPanelModuleInputProps = {
    setArrayOfModules: React.Dispatch<React.SetStateAction<SingleModuleProps[]>>
}

export function AddTermPanelModuleInput({setArrayOfModules}: AddTermPanelModuleInputProps){

    const inputType: string = "text"
    const [name, setName] = useState('')
    const [td, setTd] = useState(false)
    const [exam, setExam] = useState(false)
    const [coff, setCoff] = useState('1')

    function AddModule(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const cof = parseInt(coff)
        const singleModule: SingleModuleProps = {name, td, exam, cof};
        setArrayOfModules(prev => {
            if(prev.length + 1 >= 8){
                return prev
            }
            return(
                [...prev, singleModule]
            )
        })
    }

   return (
    <div className="flex flex-row items-center my-2 mx-4 justify-center">

        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >    
                 Module Name 
            </label>
            <input 
                type={inputType || "text"}
                name="term-name"
                placeholder="Term Name..."
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                className="
                    max-w-40 bg-white py-1 px-3 my-2
                    border-none border-black border-solid
                    rounded-lg text-center
                "
            />
        </div>


        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >
                 td
            </label>
            <input 
                type={"checkbox"}
                name="term-name"
                onChange={(e) => {setTd(e.target.checked)}}
                className="
                    max-w-40 w-5 h-5 bg-white py-1 px-3 my-2
                    border-none border-black border-solid
                    rounded-lg 
                "
            />
        </div>


        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >
                exam
            </label>
            <input 
                type={"checkbox"}
                name="term-name"
                onChange={(e) => {setExam(e.target.checked)}}
                className="
                    max-w-40 w-5 h-5 bg-white py-1 px-3 my-2
                    border-none border-black border-solid
                    rounded-lg 
                "
            />
        </div>

        <div className="flex flex-col mx-2">
            <label
                className="flex flex-row justify-center "    
            >
                coff
            </label>
            <input 
                type={"text"}
                name="term-name"
                placeholder="coff ..."
                value={coff}
                onChange={(e) => {setCoff(e.target.value)}}
                className="
                    max-w-40  bg-white py-1 px-3 my-2
                    border-none border-black border-solid
                    rounded-lg text-center 
                "
            />
        </div>

        <button 
            className='h-10 relative top-2 border border-black border-solid bg-green-200 text-black px-2  active:translate-y-1 
            shadow-lg transition-all: duration-300 font-bold text-3xl'
            onClick= {AddModule} 
        > 
        +
        </button>

    </div>
   ) 

}