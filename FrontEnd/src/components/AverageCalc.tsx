import React, { useEffect, useMemo, useState } from 'react'
import { useId } from '../hooks/useId'
import type { SingleModuleProps } from '../hooks/useTerms';
import { getModules } from '../hooks/useModule';
import MainPanelModule from './mainPanel/MainPanel-Module';

const AverageCalc = () => {
  const {id, setId} = useId();
  const [modules, setModules] = useState<SingleModuleProps[]>()
  const [modulesAvg, setModulesAvg] = useState<Map<string, number>>(new Map<string, number>())

  useEffect(() => {
    getModules(id).then(setModules)
  }, [id])


  const realAverage = useMemo(() => {
    let total: number = 0;

    modulesAvg.forEach((value, key) => {
      total += value
    })

    let cofTotal: number = 0
    modules?.forEach((module) => {
      cofTotal += module.coff;
    })

    const average = total / cofTotal;
    return average

  }, [modulesAvg])


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
                 Exam
            </label>
            <label
                className=" 
                py-1 px-12 my-2
                border-none  
                "    
                >
                 Td
            </label>
            <label
                className=" 
                py-1 px-12 my-2
                border-none  
                "    
                >
                  Avg
            </label>
          </div>
      {modules?.map((module) => (
        <MainPanelModule setModulesAvg={setModulesAvg} module={module} key={module.id}/>
      ))}

      <div className='flex justify-center items-center'>
        {
          `modules average is: ${realAverage}`
        }
      </div>
    </section>
  )
}

export default AverageCalc


