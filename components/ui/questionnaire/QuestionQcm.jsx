import React from 'react'

export const QuestionQcm = ({titre,name,Choix1,Choix2,Choix3,Choix4}) => {
  return (
    <div>
        <h1 className={`text-xl text-center text-white font-black p-4`}>{titre}</h1>

        <div className='grid-cols-2 grid m-auto justify-center items-center h-full'>
            
            <div className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="A" name={name} value={Choix1} className="hidden peer" required />
                <label htmlFor="A" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix1}
                        </div>
                    </div>
                </label>
            </div>

            <div className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="B" name={name} value={Choix2} className="hidden peer" required />
                <label htmlFor="B" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix2}
                        </div>
                    </div>
                </label>
            </div>

            <div className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
                <input type="radio" id="C" name={name} value={Choix3} className="hidden peer" required />
                <label htmlFor="C" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block w-full">
                        <div className="w-full text-lg font-semibold text-center">
                            {Choix3}
                        </div>
                    </div>
                </label>
            </div>

            <div className="choix w-50 h-10 mt-8 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer m-auto">
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
