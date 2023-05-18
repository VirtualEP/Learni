import React, { useEffect, useRef, useState } from 'react'
import EasyField from '../learner/questionsType/EasyField'
import { AnimatePresence, motion } from 'framer-motion'
import { useServerHook } from '../../hooks/useServerHook';
import { useParams } from 'react-router-dom';

export default function UploadMedia({ onClose, topics, onSuccess, onFailure }) {
    const fileInputRef = useRef();
    const [files, setFiles] = useState([])
    const [notes, setNotes] = useState([])
    const [topic, setTopic] = useState({ topic: '', show: false, id: '' })
    const { uploadMedia } = useServerHook();

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    let { id } = useParams();
    const [previewlink, setPreviewlink] = useState('')

    const onUpload = () => {
        setLoading(true)
        if (name === '' || (topic.topic === '' && topic.id === '') || files.length < 1) {
            setLoading(false)
            return;

        }

        let data = { name, notes, topic: topic.topic, topicId: topic.id, media: files[0], course: id }

        uploadMedia(data).then(response => {
            
            onSuccess(response.data)
        }).catch(error => {
            onFailure(error);
        }).finally(() => {
            setLoading(false)

        })
    }


    useEffect(() => {
        if (files.length) {

            setName(files[0].name)
            return
        }
        setName('')
    }, [files])



    return (
        <div className="flex-1 h-full flex flex-row  overflow-hidden ">
            <div className="flex-1 bg-white border-r border-gray-50 flex flex-col h-[100%] pr-3 space-y-7 overflow-y-auto py-3">
                <div className="flex items-center space-x-3 ">

                    {
                        !topic.show ?
                            <div onClick={e => setTopic(prev => ({ ...prev, show: true }))} className="bg-gray-200 cursor-pointer flex py-1 flex-1 px-5 justify-between rounded-full text-sm items-center text-gray-500">
                                <p>{topic.topic || "Select a heading or topic"}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                            :
                            <input type="text" value={topic.topic} onChange={e => setTopic(prev => ({ ...prev, topic: e.target.value, id: '' }))} placeholder="Type topic..." className=" bg-gray-200 overflow-hidden py-2 rounded-xl px-5 flex-1" />}

                    <button
                        onClick={e => {
                            if (!topic.show) {
                                setTopic(prev => ({ ...prev, show: true }))
                                return;
                            }
                            setTopic(prev => ({ ...prev, show: false }))

                        }}
                        className="bg-blue-500 text-white text-sm px-5 py-2 rounded-full">Create new</button>

                </div>
                <AnimatePresence>
                    {topic.show && <motion.div exit={{ height: 0, opacity: 0, top: -10 }} initial={{ opacity: 0, height: '0px', top: -10 }} animate={{ opacity: 1, height: '200px', top: 0 }} div className="max-h-[200px]  shrink-0 bg-gray-100 shadow-indigo-100 border shadow rounded-lg overflow-y-auto">
                        {/* <h3 className="mb-1 mx-3 mt-3">Select a topic</h3> */}
                        {topics.map((topic_, i) => <button key={`upload-media=${i}`} className='w-full flex border-b px-2'>
                            <div onClick={() => setTopic(prev => ({ ...prev, id: topic_._id, topic: topic_.title, show: false }))} className=" w-full flex flex-row items-center justify-between text-left py-2 text-sm text-gray-500">
                                <p>{topic_.title}</p>

                                {topic.topic === topic_.title && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-purple-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>}

                            </div>
                        </button>)}
                    </motion.div>}
                </AnimatePresence>

                {
                    !files.length ? <div onClick={e => fileInputRef.current.click()} className="h-[30vh] border border-dashed flex items-center justify-center cursor-pointe shrink-0">
                        <input onChange={e => {
                            setFiles(e.target.files)
                            if (e.target.files) {
                                const file = e.target.files[0];
                                const url = URL.createObjectURL(file);
                                setPreviewlink(url);
                            }
                        }} ref={fileInputRef} type="file" accept='video/mp4' className="hidden" />
                        <div className="flex items-center justify-center flex-col text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>

                            <p>Click to upload a media file</p>
                        </div>

                    </div>
                        :
                        <div className="h-[30vh] bg-black">
                            <video
                                className="w-full h-full"

                                controls
                                src={previewlink}
                            />
                        </div>}

                <div className='px-1 flex items-center'>
                    <p className='text-sm shrink-0 h-full bg-gray-100 flex items-center justify-center px-3 text-gray-500 font-medium'>File name</p>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="px-3 py-2  bg-white border w-full" />
                </div>
                <div className=" border-gray-100 py-5 flex-col space-y-3">

                    {
                        notes.map((data, index) => <div className="flex flex-col" key={`notes-${index}`}>
                            <EasyField value={data.content} setValue={(value_) => {
                                let notes_ = notes;
                                notes_[index].content = value_

                                setNotes(notes_)
                            }} label={`Paragraph ${index + 1}`} />
                            <div>
                                <button
                                    onClick={e => {
                                        setNotes(notes.filter(note_ => (note_.content !== data.content)))
                                    }}
                                    className="text-xs bg-red-200 px-5 py-1 mt-1 rounded-full text-red-800">Delete</button>
                            </div>
                        </div>)
                    }

                    <div className='w-full flex items-center justify-center flex-col text-sm'>
                        <div className='text-xs w-1/2 text-center mb-2 text-gray-400'>
                            <p>If you wish to add notes to your video, click on button below.</p>
                        </div>
                        <button onClick={e => setNotes(prev => ([...prev, { content: '', type: 'text' }]))} className='bg-gray-100 font-medium px-5 py-2 rounded-full text-sm text-gray-400'>New paragraph</button>
                    </div>

                </div>



                <div className=' mb-10 flex items-center justify-center space-x-3'>
                    <button disabled={loading} onClick={onUpload} className='bg-blue-500 text-white flex items-center justify-center w-1/2 py-3 text-center rounded-full hover:w-full transition-all delay-100 hover:transition-all'>
                            {
                                !loading ? 'Submit' :
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                            }
                        </button>
                    <button disabled={loading} onClick={onClose} className='bg-gray-300 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>cancel</button>
                </div>

            </div>
            <button disabled={loading} onClick={onClose} className="flex-1"></button>
        </div>
    )
}
