import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

type PostTermsProps = {
    termName: string,
    modules: SingleModuleProps[],
}

async function postTerms({termName, modules}:PostTermsProps): Promise<Response> {

          const response = await fetch('http://localhost:8000/terms',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name:termName,
              modules:modules,
            }),
          });
          return response
}

export interface SingleModuleProps{
    name: string,
    td: boolean,
    exam: boolean,
    coff: number,
    id: string,
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

export function useMutateTerm(){

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postTerms,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['terms']})
        }
    });

}
