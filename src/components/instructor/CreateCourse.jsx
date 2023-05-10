import React, { useRef, useState } from 'react'
import EasyField from '../learner/questionsType/EasyField';
import { motion } from 'framer-motion'

export default function CreateCourse({onClose}) {

    const fileInputRef = useRef();

    const [files, setFiles] = useState([])

    return (
        <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}}   className="absolute top-0 -ml-0 -left-5  bg-black bg-opacity-20 w-[103.6%] h-[102.9%] leading-relaxed overflow-hidden flex">
            <motion.div initial={{width: 0}} exit={{width: "0%"}} animate={{width: '50%'}} className="px-5 w-1/2 bg-white h-full flex flex-col shrink-0">
                <div className="flex flex-col space-y-2 px-5 border-b border-gray-50 pb-5">
                    <h1 className="font-medium text-xl text-gray-600">Create a new Courses</h1>
                    <p className="text-sm text-gray-400 font-light">Provide more information about the courses.</p>
                </div>
                <form className='flex flex-col space-y-5 h-[100%] overflow-y-auto py-5' >

                    {/* file upload */}
                    <div className='mx-1 flex flex-col space-y-2 text-gray-600 px-3 mt-5'>
                        <h3 className="text-sm text-gray-600 font-medium">Course cover</h3>
                        <input onChange={e => setFiles(e.target.files)} ref={fileInputRef} type="file" className="hidden" />
                        <div className="min-h-[200px] border border-dashed rounded-md flex items-center justify-center flex-col space-y-2">
                            {
                                !files.length ?
                                    <div onClick={e => fileInputRef.current.click()} className="flex flex-col items-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                            <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm font-light text-gray-400">click or drag a file over to upload</p>
                                        <p className="text-sm font-light text-gray-400">Max size [20Mb]</p>
                                    </div> :
                                    <div className='w-full px-3'>
                                        <div className='flex  space-x-3'>
                                            <div className="h-16 w-16 shrink-0 bg-gray-100 rounded-md flex items-center justify-center">
                                                <p className="text-sm font-light text-gray-300">{files[0].name.split('.')[files[0].name.split('.').length - 1]}</p>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className='text-base'>{files[0].name}</h4>
                                                <p className='text-xs'>{parseInt(files[0].size * 1e-6)}Mb</p>
                                            </div>
                                            <button className='shrink-0' onClick={e => setFiles([])}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-200 hover:text-gray-600 transition-all hover:scale-110">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>

                            }
                        </div>
                    </div>

                    <div className="px-3 flex flex-col space-y-2">
                        <label for="" className="text-sm text-gray-600 font-medium">Course title</label>
                        <input className="bg-white border px-3 py-3" placeholder="Type title here" />
                    </div>

                    <div className="px-2">
                        <EasyField rounded={false} labelStyle="text-sm text-gray-600 font-medium" label="Describe course" />
                    </div>

                    <div className="flex flex-row px-3 space-x-5">
                        <div className="flex-1 flex flex-col space-y-2">
                            <label for="" className="text-sm text-gray-600 font-medium">Course price</label>
                            <input className="w-full bg-white border py-3 " />
                        </div>
                        <div className="flex-1 flex flex-col space-y-2">
                            <label for="" className="text-sm text-gray-500 font-medium">Recievable</label>
                            <h4 className="font-bold text-xl">GHS 00.00</h4>
                        </div>
                    </div>

                    <div className="px-3 flex flex-col space-y-2">
                        <div>
                            <h4 for="" className="text-sm text-gray-600  font-medium">Course tags</h4>
                            <p className="text-sm text-gray-400">Tags help students find your courses easily and smart.</p>
                        </div>
                        <input className="bg-white border-b px-3 py-3" placeholder="Type tag and press enter" />
                        <div className="flex w-full flex-wrap space-x-2 py-5">
                            <div className="text-xs px-5 py-1 rounded bg-blue-100 text-blue-700">Python</div>
                            <div className="text-xs px-5 py-1 rounded bg-blue-100 text-blue-700">css</div>
                            <div className="text-xs px-5 py-1 rounded bg-blue-100 text-blue-700">html</div>
                        </div>
                    </div>

                    <div className=' mb-10 py-5 flex items-center justify-center space-x-3'>
                        <button className='bg-blue-500 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>Submit</button>
                        <button onClick={onClose} className='bg-gray-300 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>cancel</button>
                    </div>

                </form>
            </motion.div>
            <button className='flex-1' onClick={onClose}>

            </button>
        </motion.div>
    )
}
