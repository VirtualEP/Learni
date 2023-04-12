import React from 'react'
import MultipleChoice from './learner/questionsType/MultipleChoice'
import EasyField from './learner/questionsType/EasyField'
import FileUpload from './learner/questionsType/FileUpload'
import { motion } from 'framer-motion'

export default function QuestionModal({ onClose }) {
    return (
        <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}}  className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">

            <div className='h-[95vh] w-2/4 bg-white rounded overflow-hidden overflow-y-auto'>
                <div className='mx-10 py-10 flex flex-col space-y-3 border-b border-gray-100'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-lg font-semibold'>Exercise 001</h2>
                        <p className='text-sm font-light  text-gray-500'>Please read through the questions carefully and provide the right corresponding answers needed.</p>
                    </div>
                    <div className='flex '>
                        <div className='bg-blue-100 px-5 py-2 rounded-full cursor-pointer'>
                            <p className='text-blue-500 text-xs font-medium'>Multiple choice</p>
                        </div>
                    </div>
                </div>
                <ol className='px-10 py-10 flex flex-col space-y-10'>
                    <MultipleChoice />
                    <EasyField />
                    <FileUpload />
                </ol>
                <div className='px-10 mb-10 flex items-center justify-center space-x-3'>
                    <button className='bg-blue-500 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>Submit</button>
                    <button onClick={onClose} className='bg-gray-300 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>cancel</button>
                </div>
            </div>
        </motion.div>
    )
}
