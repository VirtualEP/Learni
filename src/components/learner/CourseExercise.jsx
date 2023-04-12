import React, { useRef, useState } from 'react'
import MultipleChoice from './questionsType/MultipleChoice';
import EasyField from './questionsType/EasyField';
import FileUpload from './questionsType/FileUpload';
import { AnimatePresence } from 'framer-motion';
import QuestionModal from '../QuestionModal';

export default function CourseExercise() {

    const [showQuestionModal, setShowQuestionModal] = useState(false)

    return (<>
        <div className="flex-1 bg-white py-5">


            <div className="flex flex-row">

                <div onClick={() => setShowQuestionModal(true)} className="bg-gray-50 flex hover:scale-105 transition-all border border-gray-50 rounded-sm p-3 space-x-5 cursor-pointer m-2">
                    <div className="w-16 h-16 flex items-center justify-center bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                    <div className="pr-2">
                        <p className='font-medium text-gray-700'>Exercise 001</p>
                        <p className='text-sm font-medium text-blue-600'>New</p>
                    </div>

                </div>
            </div>

        </div>
        <AnimatePresence>
            {showQuestionModal && <QuestionModal onClose={() => setShowQuestionModal(false)} />}
        </AnimatePresence>
    </>
    )
}
