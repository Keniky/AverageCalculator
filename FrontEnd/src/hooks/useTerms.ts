import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

async function getTerms() : Promise<SingleTermProps[]>{
    try{

        const response = await fetch('http://localhost:8000/terms',{
            method: "GET",
        });

        if(!response.ok){
            throw new Error('Request Failed');            
        }

        const data = await response.json()
        return data;

    }catch{
        console.log('failed lol ')
        toast.error('failed lol')
    }
    return []
}

                    // modules:[
                    //     {name:'Alco', td:true, exam:true},
                    //     {name:'Anal', td:true, exam:true},
                    //     {name:'Alg', td:true, exam:true},
                    //     {name:'Idk', td:true, exam:true},
                    // ]
export interface SingleModuleProps{
    name: string,
    td: boolean,
    exam: boolean,
    cof: number,
}
export interface ModuleProps{
    modules: SingleModuleProps[];
}

export interface SingleTermProps{
    id: string,
    name: string,
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