import React from 'react'

export default function LogInfo() {
  return (
    <div className="flex flex-col space-y-6 px-3 md:px-0">
    <div className="md:w-2/3 bg-gray-100 h-[400px] rounded-lg bg-center bg-contain" style={{backgroundImage:`url('https://cdn.dribbble.com/userupload/3232539/file/original-410ff489ae11f76089c3a844698f31aa.png?compress=1&resize=2048x1536')`}}>

    </div>
    <div className="md:w-2/3 flex flex-col space-y-3">
        <h3 className="text-xl font-semibold text-gray-700">Watch more and better in 4K</h3>
        <div className='text-gray-500 flex-col space-y-6 txt-sm'>
            <p>Interactive Multimedia: Our platform allows you to seamlessly integrate multimedia content such as videos, animations, and interactive quizzes into your lessons. These engaging elements help to break down complex concepts, stimulate curiosity, and encourage active participation.</p>
            <p>Mobile-Friendly and Responsive Design: Our platform is designed to be mobile-friendly and responsive, ensuring students can access their learning materials and engage in lessons from any device. Whether it's a smartphone, tablet, or computer, students can seamlessly continue their learning journey.</p>
            <p>Collaboration and Discussion: Our platform provides tools for collaboration and discussion, allowing students to engage with their peers and instructors. Students can participate in group projects, forums, or live discussions, fostering a collaborative learning environment and encouraging knowledge sharing.</p>
        </div>
    </div>
    <div className="w-2/3 border-t py-10 border-gray-100 " />
</div>
  )
}
