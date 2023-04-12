import React from 'react'

export default function MultipleChoice() {
    return (
        <li className='flex flex-col space-y-4'>
            <h4>What is the term FPS usually termerd as ?</h4>
            <div className='mx-2 flex flex-col space-y-2 text-gray-600'>
                <div className='flex items-center space-x-4 text-sm'>
                    <input type='checkbox' />
                    <p>Framer Pointer Selector</p>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                    <input type='checkbox' />
                    <p>Frames Per Second</p>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                    <input type='checkbox' />
                    <p>Application memory</p>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                    <input type='checkbox' />
                    <p>First Person Shooter</p>
                </div>
            </div>
        </li>
    )
}
