import { useQuery } from "@tanstack/react-query";

async function getTerms() : Promise<TermProps>{
    try{

        const response = await fetch('http://localhost:8000/terms',{
            method: "GET",
        });

        if(!response.ok){
            throw new Error('Request Failed');            
        }

        return await response.json();

    }catch{
        console.log('failed lol ')
        return ({

            terms: [
                {
                    id:'1',
                    name:'1er Anne LMD',
                    modules:[
                        {name:'Alco', td:true, exam:true},
                        {name:'Anal', td:true, exam:true},
                        {name:'Alg', td:true, exam:true},
                        {name:'Idk', td:true, exam:true},
                    ]
                },
                {
                    id:'2',
                    name:'2eme Anne LMD',
                    modules:[
                        {name:'Alco', td:true, exam:true},
                        {name:'Anal', td:true, exam:true},
                        {name:'Alg', td:true, exam:true},
                        {name:'Idk', td:true, exam:true},
                    ]
                },
            ],
        }
    )
    }
}

export interface ModuleProps{
    name: string,
    td: boolean,
    exam: boolean,
}

export interface SingleTermProps{
    id: string,
    name: string,
    modules: ModuleProps[],
}

export interface TermProps{
    terms: SingleTermProps[],
}

export function useTerms() {
  return useQuery({
    queryKey: ['terms'],
    queryFn: () => getTerms(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
}