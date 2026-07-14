import type { SingleModuleProps } from "./useTerms";
import { toast } from "sonner";

export async function getModules(termId: string) : Promise<SingleModuleProps[]>{
    try{

        const response = await fetch('http://localhost:8000/modules',{
            method: "GET",
            headers: {
                "termId":termId,
            }
        });

        if(!response.ok){
            throw new Error('Request Failed');            
        }

        const data = await response.json()
        return data;
    }catch{
        console.log('failed lol ')
        toast.error('failed to retrieve Modules')
    }
    return []
}

