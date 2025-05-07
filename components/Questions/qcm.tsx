'use client'
import React, { useEffect } from 'react'
import { gsap } from "gsap";


interface QcmProps {
    titre: string;
    name: string;
    Choix1: string;
    Choix2: string;
    Choix3: string;
    Choix4: string;
    Oblige?: string;
}

export const Qcm: React.FC<QcmProps> = ({titre,name,Choix1,Choix2,Choix3,Choix4,Oblige}) => {

   
    
    function handleClick(response:string){
        if(Oblige && response != Oblige){
            gsap.to('#body', {
                background: 'linear-gradient(to right, #bd0f0f, #bd4c0f)',
                duration: 0.4,
                onComplete: () => {
                    gsap.to('#body', {
                        background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                        duration: 0.4
                    });
                }
            });
            gsap.to('#body',{
                x:10,
                ease:'elastic',
                duration:0.6,
                onComplete: () => {
                    gsap.to('#body', {
                        x:0,
                        duration: 0.2,
                    });
                }
            })
        }
        if(Oblige && Oblige == response){
            gsap.to('#body', {
                background: 'linear-gradient(to right, #46eb34, #009617)',
                duration: 0.8,
                onComplete: () => {
                    gsap.to('#body', {
                        background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                        duration: 0.4
                    });
                }
            });
        }
    }
  return (
    <div >
        <h1 className={`text-xl text-center text-white font-black p-4`}>{titre}</h1>

        <div className='grid-cols-2 grid m-auto justify-center items-center h-full'>
            
            <div onClick={()=>handleClick(Choix1)} className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="A" name={name} value={Choix1} className="hidden peer" required />
                <label htmlFor="A" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix1}
                        </div>
                    </div>
                </label>
            </div>

            <div onClick={()=>handleClick(Choix2)} className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="B" name={name} value={Choix2} className="hidden peer" required />
                <label htmlFor="B" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix2}
                        </div>
                    </div>
                </label>
            </div>

            <div onClick={()=>handleClick(Choix3)} className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="C" name={name} value={Choix3} className="hidden peer" required />
                <label htmlFor="C" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix3}
                        </div>
                    </div>
                </label>
            </div>

            <div onClick={()=>handleClick(Choix4)} className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="D" name={name} value={Choix4} className="hidden peer" required />
                <label htmlFor="D" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix4}
                        </div>
                    </div>
                </label>
            </div>

        </div>
    </div>
  )
}
