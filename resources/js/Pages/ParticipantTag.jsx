
import html2canvas from "html2canvas";
import React, { useRef } from 'react';
export default function ParticipantTag({imagePath})
{
    const myStyles = {
        position: 'relative',
        width:'50%'

        
    };

    console.log(imagePath)

    const image = {
    width: '40%',
    height: 'auto'
    }

    const nameStyle ={
        
        width: '50%',
        transition: '.5s ease',
        color: 'black',
        top:'27%',
        bottom:'0',
        left:'15%',
        zIndex:'1'
    
    };

    const elementRef = useRef(null); // Create a ref to target the HTML element

      const handleDownloadImage = async () => {
        if (elementRef.current) {
          const canvas = await html2canvas(elementRef.current, {
            allowTaint: true, // Allow capturing content from other origins if necessary
            useCORS: true, // Use CORS for images if they are from different domains
          });

          const dataURL = canvas.toDataURL('image/png'); // Convert canvas to PNG data URL

          // Create a temporary link element to trigger the download
          const link = document.createElement('a');
          link.href = dataURL;
          link.download = 'my-component.png'; // Specify the desired filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); // Clean up the temporary link
        }
      };
    return(
        <div className="bg-gray-200  justify-center">

            <div className="bg-gray-200 h-full flex items-center justify-center min-h-screen">

                <div ref={elementRef}  className="sm:flex bg-gray-200 gap-4">

                    <div className="w-64 h-full z-10 bg-white shadow-lg rounded-lg mb-5 sm:mb-0 flex flex-col justify-between  overflow-hidden">
                    
                        <img  src="images/frontTag.png" className=" relative absolute w-64 h-full bg-black "/>
                        
                    
                        <div   className=" px-20 absolute top-5 ">
                           
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div  className="w-24 h-24  rounded-full overflow-hidden">
                                <img src= {imagePath} alt="Profile Photo" className="w-full my-9 h-full object-cover grayscale"/>
                            </div>

                            <h2 className="text-center font-bold text-xs text-black">Muhammed Oderinu</h2>

                          
                        </div>
                    </div>

                    <div className="w-64  bg-black shadow-lg rounded-lg  flex flex-col justify-between  overflow-hidden text-white">

                        
                        <img  src="images/backTag.png" className="relative w-full h-full bg-black top-0 left-0"/>  

                        <div className="  py-10 px-10 absolute flex flex-col items-center mt-16">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?data=SarahMartinez&size=100x100" alt="QR Code" className="mb-4"/>
                            <p className=" text-xs italic text-gray-500 font-sans  dark:text-gray-400"> This will be scanned at the event center</p>
                            <p className="text-xs text-gray-500  dark:text-gray-400 italic">For more Info call <span >xxxxxx</span> </p>
                            <p className="mb-3 text-xs text-gray-500  dark:text-gray-400"> Thanks For coming</p>
                            
                        </div>

                            
                    </div>
                </div>

            </div>

            <div className="px-5 sm:px-20">
            <button onClick={handleDownloadImage} type="button" className="text-white h-12 w-full mt-2  item-center bg-green-700 hover:bg-green-800 
                focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 
                text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download as Image
            </button>

            </div>
            
           

        </div>
        
      
    )
}