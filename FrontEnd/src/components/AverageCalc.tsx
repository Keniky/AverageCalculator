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
    <section className='flex flex-col flex-1  bg-blue-500'>
      {modules?.map((module) => (
        <MainPanelModule setModulesAvg={setModulesAvg} module={module}/>
      ))}
    </section>
  )
}

export default AverageCalc


