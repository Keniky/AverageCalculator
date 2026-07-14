import React, { useEffect, useMemo, useState } from 'react'
import { useId } from '../hooks/useId'
import type { SingleModuleProps } from '../hooks/useTerms';
import { getModules } from '../hooks/useModule';
import MainPanelModule from './mainPanel/MainPanel-Module';

const AverageCalc = () => {
  const {id, setId} = useId();
  const [modules, setModules] = useState<SingleModuleProps[]>()
  const [modulesAvg, setModulesAvg] = useState<number[]>([])
  

  useEffect(() => {
    getModules(id).then(setModules)
  }, [id])

  return (
    <section className='flex flex-col flex-1 text-black font-bold  bg-blue-500'>
          <div className='flex flex-row justify-center'>
            <label
                className=" 
                py-1 px-12 my-2
                border-none  
                "    
                >    
                 Name 
            </label>
            <label
                className="  
                py-1 px-12 my-2
                border-none  
                "    
                >
                 td
            </label>
            <label
                className=" 
                py-1 px-12 my-2
                border-none  
                "    
                >
                 exam
            </label>
          </div>
      {modules?.map((module) => (
        <MainPanelModule setModulesAvg={setModulesAvg} module={module} key={module.id}/>
      ))}
    </section>
  )
}

export default AverageCalc


