import React, { useRef, useState } from 'react'
import EasyField from '../learner/questionsType/EasyField';
import { motion } from 'framer-motion'
import { useServerHook } from '../../hooks/useServerHook';
import { useNavigate } from 'react-router-dom';

export default function CreateCourse({ onClose }) {

    const fileInputRef = useRef();

    const [files, setFiles] = useState([])
    const [tag, setTag] = useState('')
    const [price, setPrice] = useState(0)
    const [discription, setDiscription] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(false)

    const [response, setResponse] = useState(null)
    const { createCourse } = useServerHook();
    const navigate = useNavigate()

    const onCreateCourse = () => {
        setLoading(true)

        if (title === '' || tags.length < 1 || discription === '' || files.length < 1) {
            console.log("empty fields");
            setLoading(false)
            return;
        }
        const data_ = { title, tags, discription, cover: files[0] }

        createCourse(data_).then((course) => {
            setResponse(course.data)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    }

    console.log(response);

    return (
        <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 -ml-0 -left-5  bg-black bg-opacity-20 w-[103.6%] h-[100%] leading-relaxed overflow-hidden flex">
            <motion.div initial={{ width: 0 ,opacity:1}} exit={{ opacity: 0,width: 0}} animate={{ width: '50%',opacity:1 }} className="px-5 w-1/2 bg-white h-full flex flex-col shrink-0 relative">
                <div className="flex flex-col space-y-2 px-5 border-b border-gray-50 pb-5">
                    <h1 className="font-medium text-xl text-gray-600">Create a new Courses</h1>
                    <p className="text-sm text-gray-400 font-light">Provide more information about the courses.</p>
                </div>
                <div className='flex flex-col space-y-5 h-[100%] overflow-y-auto py-5' >

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
                                    <div className='w-full flex flex-1 flex-col rounded-md relative'>
                                        <img className="w-full h-[200px] bg-green-100" src={URL.createObjectURL(files[0])} />
                                        <div className="flex py-2 px-2">
                                            <p className='text-xs bg-green-400 font-medium text-green-50 px-3 rounded-md'>{Math.round(files[0].size*1e-6)}MB / 20MB</p>
                                        </div>
                                        <button type="button" onClick={() => setFiles([])} className="absolute top-0 right-0 text-white bg-black bg-opacity-20 hover:bg-opacity-60 transition-all p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        </button>
                                    </div>
                            }
                        </div>
                    </div>

                    <div className="px-3 flex flex-col space-y-2">
                        <label for="" className="text-sm text-gray-600 font-medium">Course title</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} className="bg-white border px-3 py-3" placeholder="Type title here" />
                    </div>

                    <div className="px-2">
                        <EasyField value={discription} setValue={setDiscription} rounded={false} labelStyle="text-sm text-gray-600 font-medium" label="Describe course" />
                    </div>

                    <div className="flex flex-row px-3 space-x-5">
                        <div className="flex-1 flex flex-col space-y-2">
                            <label for="" className="text-sm text-gray-600 font-medium">Course price</label>
                            <input value={price} onChange={e => setPrice(e.target.value)} className="w-full bg-white border p-3 " type="number" />
                        </div>
                        <div className="flex-1 flex flex-col space-y-2">
                            <label for="" className="text-sm text-gray-500 font-medium">Recievable</label>
                            <h4 className="font-bold text-xl">GHS {(price - (price * (5 / 100)))}</h4>
                        </div>
                    </div>

                    <div className="px-3 flex flex-col space-y-2">
                        <div>
                            <h4 for="" className="text-sm text-gray-600  font-medium">Course tags</h4>
                            <p className="text-sm text-gray-400">Tags help students find your courses easily and smart.</p>
                        </div>

                        <input
                            onChange={e => setTag(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    setTags(prev => [...prev, tag]);
                                    setTag('')
                                }
                            }}
                            value={tag}
                            className="bg-white border-b px-3 py-3" placeholder="Type tag and press enter" />
                        <div className="flex w-full flex-wrap space-x-2 py-5">
                            {tags.map((data, index) => <div key={index + '-tag'} className="text-xs px-5 py-1 my-1 rounded bg-blue-100 text-blue-700">{data}</div>)}

                        </div>
                    </div>

                    <div className=' mb-10 py-5 flex items-center justify-center space-x-3'>
                        <button onClick={onCreateCourse} disabled={loading} className='bg-blue-500 text-white flex items-center justify-center w-1/2 py-3 text-center rounded-full hover:w-full transition-all delay-100 hover:transition-all'>
                            {
                                !loading ? 'Submit' :
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                            }
                        </button>
                        <button disabled={loading} onClick={onClose} className='bg-gray-300 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>cancel</button>
                    </div>

                </div>

                {response &&
                    <motion.div className="absolute  top-0 left-0 w-full h-full bg-white">
                        <div className="px-5">
                            <h3 className="font-bold text-2xl leading-relaxed text-gray-800">Course {response.message}</h3>
                            <p className='text-gray-400 text-sm my-2 capitalize'>Course has been created Successfully, you can now manage your course from the courses tab.</p>
                            <div className="flex items-center space-x-2">
                               {!response.error && <button onClick={() => navigate(''+response.course._id+'/lessons')} className='mt-3 bg-blue-500 px-5 py-2 rounded-full text-blue-50 text-sm font-semibold'>Manage Course</button>}
                               {response.error && <button onClick={() => setResponse(null)} className='mt-3 bg-blue-red px-5 py-2 rounded-full text-red-50 text-sm font-semibold'>Try again</button>}
                                <button onClick={onClose} className='mt-3 bg-gray-500 px-5 py-2 rounded-full text-gray-50 text-sm font-semibold'>Dismiss</button>
                            </div>
                        </div>
                    </motion.div>
                }
            </motion.div>

            <button className='flex-1' disabled={loading} onClick={onClose}>

            </button>
        </motion.div>
    )
}
