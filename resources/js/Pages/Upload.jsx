import React, { useState } from 'react';
import Timer2 from '../components/Timer2';

export default function Upload() {
    // collect image from the input file
    const [image, setImage] = useState(null)

    

    const handleFileSubmission = (event) => {
        
    }

    const handleFileChanged = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            var file = selectedFiles[0];
            console.log('Selected file name:', file.name);
            console.log('Selected file size:', file.size);
            console.log('Selected file type:', file.type);
            if(file.size < 50000){
              setImage(URL.createObjectURL(file))
            }
          // log in file too big error
        }
       
    }
   
    return (
        <div>
        
              
                <div className="border-b-2 py-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            <div x-show="step === 1">
                             <div className="text-lg font-bold text-gray-700 leading-tight">Your Photo</div>
                        </div>
                         
                    </div>

                    <div className="flex items-center md:w-64">
                        <div className="w-full bg-white rounded-full mr-2">
                            <div className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white" ></div>
                        </div>
                        <div className="text-xs w-10 text-gray-600"></div>
                    </div>
                </div>
            </div>

             <div className="py-10">	
                 <div >
                     <div className="mb-5 text-center">
                         <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                             <img id="image" className="object-cover w-full h-32 rounded-full" src={image} />
                         </div>
                         
                         <label 
                             htmlFor="fileInput"
                             type="button"
                             className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                         >
                             <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                 <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                 <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                 <circle cx="12" cy="13" r="3" />
                             </svg>						
                             Browse Photo
                         </label>

                         <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

                         <input name="photo" id="fileInput" accept="image/*" className="hidden" type="file" onChange={handleFileChanged} />
                        
                            
                     </div>

                    
                 </div>
                 
                 </div>

                 <div className="fixed bottom-0 left-0 right-0 py-5 bg-white shadow-md" x-show="step != 'complete'">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="flex justify-center items-center">
                        
                                <button
                                    id = 'upload'
                                    className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium" 
                                >Complete</button>
                        </div>
                    </div>
                </div>
                            
             </div>

    );
}



