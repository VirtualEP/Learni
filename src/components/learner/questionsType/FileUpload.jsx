import React, { useRef, useState } from 'react'

export default function FileUpload() {

    const fileInputRef = useRef();

    const [files, setFiles] = useState([])


    return (
        <li className='flex flex-col space-y-4 '>
            <h4>Write and compile a c++ application to add x amount of input and print the result in the concole. Upload a build of your complete code.</h4>
            <div className='mx-1 flex flex-col space-y-2 text-gray-600'>
                <input onChange={e => setFiles(e.target.files)} ref={fileInputRef} type="file" className="hidden" />
                <div className="min-h-[100px] border border-dashed rounded-md flex items-center justify-center flex-col space-y-2">
                    {
                        !files.length ? <div onClick={e => fileInputRef.current.click()} className="flex flex-col items-center cursor-pointer">
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
        </li>
    )
}
