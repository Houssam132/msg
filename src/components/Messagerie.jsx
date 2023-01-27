import React from 'react'

const Messagerie = () => {
  return (
    <div className='flex justify-items-center '>
        <div className='container '>
            <form className='md:w-full  md:ml-56 sm:ml-6  rounded-l-3xl  bg-[#79cef5] h-96 '>
                <div>
                    <div className='bg-[#316881] h-8 rounded-tl-lg'>
                        <h2 className='font-bold ml-6 text-white '>Houssam Ben</h2>
                        <img src='' alt=''></img>
                    </div>
                    
                    
                    
                    
                    <div className="py-6 md:px-8 px-24 w-96 mt-64 mr-12 flex justify-between">
                        
                            <input type="text" placeholder="envoyermessage " className=" h-5 md:px-36 sm:px-36  py-5  mt-2  rounded-md "></input>
                        
                        <div class="flex justify-between items-baseline">
                            <button class="mt-2 bg-[#0ea5e9] text-white py-2 px-6 rounded-lg md:ml-2 hover:bg-sky-400 ">send</button>
                        </div>


                    </div>


                </div>
            </form>
        </div>
        <div className='container hidden md:flex ml-56 '>
            <form className='bg-[#3c96c0]  rounded-r-3xl md: w-96  mr-16 '>
                <div className='space-y-0'>
                    <div className='space-x-60 bg-[#1f4353] h-8 rounded-tr-3xl'>
                        <span className='font-bold text-white ml-2'>Contacts</span>
                        <span className='font-bold text-white  hover:text-sky-700'><a href='#'> Log out</a></span>
                    </div>
                    <div className='mt-6'>
                        <ul className='space-y-0 '>
                        <li className='p-4 border-b border-t border-gray-400 font-bold text-white  hover:text-sky-700'> <a href='#'> user</a></li>
                        <li className='p-4 border-b border-gray-400 font-bold text-white  hover:text-sky-700'><a href='#'> user</a></li>
                        <li className='p-4 border-b border-gray-400 font-bold text-white  hover:text-sky-700'><a href='#'> user</a></li>
                        <li className='p-4 border-b border-gray-400 font-bold text-white  hover:text-sky-700'><a href='#'> user</a></li>
                        
                        </ul>
                    </div>


                </div>
            </form>
        </div>

        

    </div>
  )
} 

export default Messagerie