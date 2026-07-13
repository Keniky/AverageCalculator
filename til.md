well i learned about use Qeury that is wrapped from the up so i can dynamically reload data 

- to do that all i have to do is just use usemutation will uses the useQueryClient 

and somehow it needs to be aa hook function so just make the function name starts with use lol 

another thins ins the mutation function its like a normal function 

in main code i use  useMutate function that i created and i can use mutate for procedure or procedureAsync to get the return value from the function 

and most important thing is that useQuery stuff are hooks that are return like this 

return (useQuery/Mutation({
    data
}))