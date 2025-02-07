import React from 'react'
import TextInput from './TextInput'
import EmojiPicker from 'emoji-picker-react';
import CommentCard from './comments/CommentCard';

export default function Comments() {
    return (
        <div>
            <div className="relative flex flex-col space-y-2">
                <TextInput />
                <div className="flex items-center justify-between ">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                    </button>

                    <div className="flex items-center space-x-5 ">
                        <button>cancel</button>
                        <button className="bg-blue-500 peer-placeholder-shown:bg-sky-100 text-white font-medium px-5 py-2 rounded-full">Comment</button>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <CommentCard/>
            </div>
        </div>
    )
}
