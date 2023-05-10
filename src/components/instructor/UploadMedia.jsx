import React, { useRef, useState } from 'react'
import EasyField from '../learner/questionsType/EasyField'

export default function UploadMedia({onClose}) {
    const fileInputRef = useRef();
    const [files, setFiles] = useState([])
    const [notes, setNotes] = useState([])
    const [topic, setTopic] = useState({ topic: '', show: false })

    const [previewlink, setPreviewlink] = useState('')


    return (
        <div className="flex-1 h-full flex flex-row bg-black bg-opacity-20 overflow-hidden ">
            <div className="flex-1 bg-white border-r border-gray-50 flex flex-col h-full pr-3 space-y-7 overflow-y-auto py-3">
                <div className="flex items-center space-x-3">

                    {
                        !topic.show ?
                            <div className="bg-gray-200 cursor-pointer flex py-1 flex-1 px-5 justify-between rounded-full text-sm items-center text-gray-500">
                                <p>{topic.topic || "Select a heading or topic"}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                            :
                            <input type="text" value={topic.topic} onChange={e => setTopic(prev => ({ ...prev, topic: e.target.value }))} placeholder="Type topic..." className="border bg-white py-2 rounded-full px-5 flex-1" />}

                    <button onClick={e => {
                        if (!topic.show) {
                            setTopic(prev => ({ ...prev, show: true }))
                            return;
                        }
                        setTopic(prev => ({ ...prev, show: false }))

                    }
                    } className="bg-blue-500 text-white text-sm px-5 py-2 rounded-full">Create new</button>

                </div>

                {
                    !files.length ? <div onClick={e => fileInputRef.current.click()} className="h-[30vh] border border-dashed flex items-center justify-center cursor-pointer">
                        <input onChange={e => {
                            setFiles(e.target.files)
                            if (e.target.files) {
                                const file = e.target.files[0];
                                const url = URL.createObjectURL(file);
                                console.log(url);
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


                <div className=" border-gray-100 py-5 flex-col space-y-3">

                    {
                        notes.map((data, index) => <div key={`notes-${index}`}>
                            <EasyField label={`Paragraph ${index + 1}`} />
                            <button
                                onClick={e => {
                                    let newNotes_ = notes
                                    newNotes_.splice(index, 1);
                                    setNotes(newNotes_)
                                }}
                                className="text-xs bg-red-200 px-5 py-1 mt-1 rounded-full text-red-800">Delete</button>
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
                    <button className='bg-blue-500 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>Submit</button>
                    <button onClick={onClose} className='bg-gray-300 text-white w-1/2 py-3 rounded-full hover:w-full transition-all delay-100 hover:transition-all'>cancel</button>
                </div>

            </div>
            <button onClick={onClose} className="flex-1"></button>
        </div>
    )
}
