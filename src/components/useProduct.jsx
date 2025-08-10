import { useQuery } from "@tanstack/react-query"
import getData from "./getData"

function useProduct() {
   return useQuery({
    queryKey:["product"],
    queryFn:getData,
   })
}

export default useProduct
