import React from 'react'
import QnaCard from './QnaCard'


const qnas = [
    {
        user: {
            photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            name: "Akwesi Broni"
        },
        message: 'Frontend development can be more difficult than backend development. Agree?',
        likes: 12,
        dislikes: 90,
        comments: [],

    },
    {
        user: {
            photoUrl: "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            name: "Joel Boadi"
        },
        message: 'Yes!! the level of nuance understanding across programing languages allows me to convert code easily from languages I am familiar with and use the best language for the job needed. its magical.',
        likes: 12,
        dislikes: 90,
        comments: [],

    },
    {
        user: {
            photoUrl: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            name: "Miss Sandy"
        },
        message: `I swear to God if you claim that programing is easy now because it's "human language" I would like to point out that I know way more humans who can program than can use language precisely`,
        likes: 12,
        dislikes: 90,
        comments: [],

    },
    {
        user: {
            photoUrl: "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
            name: "Khan Sebastin"
        },
        message: 'Not that you guys care, but here’s this beauty at the office 🐬🧡 I’m obsessed! Hope you all are having a FINtastic  Friday! you may now resume your regularly scheduled programing.',
        likes: 12,
        dislikes: 90,
        comments: [],

    },
    {
        user: {
            photoUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80",
            name: "Tracy Sarah"
        },
        message: 'Frontend development can be more difficult than backend development. Agree?',
        likes: 12,
        dislikes: 90,
        comments: [],

    },
]

export default function CourseQna() {
    return (
        <div className="py-5 space-y-5">
            <div className="w-2/4 flex flex-col space-y-2 border-b pb-4 border overflow-hidden rounded-md border-gray-100 bg-gray-50">
                <div className="flex overflow-y-auto min-h-[150px] p-5">
                    <textarea className="flex-1 resize-none rounded-md bg-gray-50 text-lg" 
                    placeholder={`What's on your mind ?`}
                    >

                    </textarea>
                </div>
                <button className='hover:bg-blue-500 hover:ml-6 bg-gray-200 text-gray-300 transition-all delay-100  hover:scale-105 hover:transition-all hover:text-white font-medium px-10 py-2 rounded-full w-1/2 m-3'>Create thread</button>
            </div>
            <div className='w-2/4'>
                {qnas.map((data, index) => <QnaCard data={data} key={`qna-card-${index}`} />)}

            </div>

        </div>
    )
}
