import React from 'react'
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
function HeroSection({prevPageName, prevUrl, moduleTitle, moduleId, assignmentTitle, assignmentId}) {

   

    return (
        <div id='hero' className= 'flex flex-co py-1 w-full bg-slate-800 dark:bg-zinc-800 text-gray-300'>
   
         {/* id=hero is used for the footer, when clicked it will zoom back up to the HeroSection*/}
            <div className=' flex flex-row-2'>

            { 
            prevUrl.includes("/viewsubmissions") == true ?(
                <Link to={prevUrl} state={{modTitle: moduleTitle , nestedPage:"submitwork", modId: moduleId, assignmentTitle: assignmentTitle, assignmentId: assignmentId}} className=" rounded-lg font-Dosis text-slate-900 bg-slate-400 text-center w-[50px]  sm:w-[150px] sm:py-4 py-0 ml-1  text-m md:text-l font-semibold hover:bg-slate-300"> Back to {prevPageName}</Link>
                ): 
                prevUrl.includes("/upload/") == true ?(
                    <Link to={prevUrl} state={{modId: moduleId , modTitle: moduleTitle}} className=" rounded-lg font-Dosis text-slate-900 bg-slate-400 text-center w-[50px] sm:w-[150px] sm:py-4 py-0 ml-1  text-m md:text-l font-semibold hover:bg-slate-300"> Back to {prevPageName}</Link>
                     ):
                prevUrl.includes("/modules/") == true ?(
                <Link to={prevUrl} state={{moduleTitle: (moduleTitle) , nestedPage:"submitwork"}} className=" rounded-lg font-Dosis text-slate-900 bg-slate-400 text-center w-[50px] sm:w-[150px] sm:py-4 py-0 ml-1  text-m md:text-l font-semibold hover:bg-slate-300"> Back to {prevPageName}</Link>
                 )
          :(
            <Link to={prevUrl} className=" rounded-lg font-Dosis text-slate-900 dark:text-slate-100 dark:bg-zinc-700 bg-slate-400 text-center w-[50px] sm:w-[150px] sm:py-4 py-0 ml-1  text-sm md:text-l font-semibold hover:bg-slate-300 dark:hover:bg-indigo-900"> Back to {prevPageName}</Link>
          )
        }
            
            {/*<p className=' text-gray-600 dark:text-gray-300 bg-indigo-100 dark:bg-indigo-800 py-1 rounded-md'> Modules → Artificial Intelligence Module → Submit Work </p> */}

            </div>
            <h1 className= 'text-center md:mr-44 mr-14 w-full text-3xl  md:text-4xl mb-1 md:mb-4 font-semibold  text-gray-300 rounded-md'> COMPEER</h1>
        </div>
    )
}

export default HeroSection