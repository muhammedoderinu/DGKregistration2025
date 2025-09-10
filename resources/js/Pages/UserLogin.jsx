import { router, usePage } from "@inertiajs/react"
import Timer2 from "../components/Timer2"
import { useState } from "react"
import { Inertia } from "@inertiajs/inertia"


export default function UserLogin(){

    const {errors} = usePage().props
    const [error, setError] = useState('')

    const [email, setEmail] = useState('')
    const handleEmail = event => {
       setEmail(event.target.value)
    }


    const handleSubmission = (event) => {
        event.preventDefault()
        setError('')
        if(email != ''){
  
           const response  = router.post('/user/login', {
              'email': email,
           })
  
        }else{
           setError('Some field(s) are empty')
        }

    }


    return(
       

        <div className='bg-dots-darker items-center justify-center  bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900'>
             <Timer2></Timer2>
        


            <div className="w-full bg-gray-900 overflow-hidden sm:shadow-lg">
            
                <div className="px-6 py-1 sm:py-4">
                    <p className="font-bold text-pink-300 text-gray-900 sm:text-xl text-center sm:mb-2">Digital Kano Conference 2025</p>
            
                    <p className="text-gray-700 text-center text-pink-900 font-bold text-base">
                        Attendance Confirmation
                    </p>
                </div>

            </div>
  
        <div className='antialiased mt-5 sm:mt-0 px-5 sm:px-0 flex flex-col justify-center items-center '>
            <div className=" self-center mt-5 w-full sm:w-[400px]">
                <div className="bg-white content-center shadow-md rounded px-8 pt-6 pb-8 mb-4">
                 <p id= 'message' className="text-red-700 mb-4 text-xs italic"> </p>
                    <p className='text-gray-400 mb-4 text-xs italic'>It is required you enter the email used for the first registration</p>
                    <div className="mb-4">
                    <div id='update-form' >
                    <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input id='email' onChange={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder=""/>
                    {errors.email && <p className="text-red-400 mb-4 text-xs italic">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                    
                    <div className="flex items-center mt-5 justify-center">
                    <button onClick={handleSubmission}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button" >
                        Log In
                    </button>
                    </div>
                  
                    </div>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2025 Digital Kano Conference. All rights reserved.
                </p>
            </div>
        </div>
    </div>
    </div>
    )

}