import { useContext } from "react"
import { authContext } from "../component/context/Authprovider"

const useauth =() =>{
    return useContext(authContext)
}
export default useauth