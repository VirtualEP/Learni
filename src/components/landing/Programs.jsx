import React from 'react'

const Programs = () => {
  return (
    <div className="border-t border-gray-100 flex flex-col space-y-10 py-10 my-10">
      <div className="text-center">
        <h3 className="text-gray-900 font-bold text-2xl">Our Program</h3>
        <h4 className="text-gray-400 font-ligth text-lg mt-1">
          Active Coding Programs
        </h4>
      </div>
      <div className="flex items-center md:justify-center space-x-10 overflow-x-auto px-5 md:px-0">
        <img
          alt="image-one"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
          }
          className="h-[50px] md:h-[80px]"
        />
        <img
          alt="image-two"
          src={
            "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-512.png"
          }
          className="h-[50px] md:h-[80px]"
        />
        <img
          alt="image-three"
          src={
            "https://cdn.freebiesupply.com/logos/large/2x/python-3-logo-png-transparent.png"
          }
          className="h-[50px] md:h-[80px]"
        />
        <img
          alt="image-four"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Scratchlogo.svg/512px-Scratchlogo.svg.png"
          }
          className="h-[50px] md:h-[80px]"
        />
        <img
          alt="image-four"
          src={"https://logowik.com/content/uploads/images/arduino5804.jpg"}
          className="h-[50px] md:h-[80px]"
        />
      </div>
    </div>
  );
}

export default Programs