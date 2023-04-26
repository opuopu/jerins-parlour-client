
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../config/Config";




const Usefirebase = () =>{
    const [user,setuser] = useState({})
    const [loading,setloading] = useState(true)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const LoginNow =()=>{
        setloading(true)
        return signInWithPopup (auth,provider)
        
    }

    useEffect(()=>{
        const unsubscribe =   onAuthStateChanged(auth,user=>{
               if(user){
                   setuser(user)
                   console.log(user)
                       setloading(false)
               }
               else{
                   setuser({})
                    setloading(false)
               }
           })
           return ()=> unsubscribe()
       },[])

       const signout  = ()=>{
        setloading(true)
            return signOut(auth)
        }
       return {LoginNow,user,loading,signout}
    }
export default Usefirebase