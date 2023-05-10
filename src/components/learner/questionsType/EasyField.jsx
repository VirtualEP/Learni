import React, { useEffect, useRef, useState } from 'react'

export default function EasyField({label , labelStyle, rounded}) {
    const textAreaRef = useRef()
    const [textAreaValue, setTextAreaValue] = useState('')
    const resizeTextArea = () => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
      };

      useEffect(() => {
        resizeTextArea();
      }, [textAreaValue])
      
    return (
        <li className='flex flex-col space-y-4 '>
            <h4 className={labelStyle}>{label}</h4>
            <div className={`mx-1 flex flex-col space-y-2 text-gray-600 ${rounded ? 'rounded-md':''} overflow-hidden`}>
                <textarea value={textAreaValue} onChange={e=>setTextAreaValue(e.target.value)} ref={textAreaRef} className='bg-white border resize-none  border-gray-200 min-h-[60px] p-5'>

                </textarea>
            </div>
        </li>
    )
}
