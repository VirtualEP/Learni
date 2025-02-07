import React, { useState } from 'react';

const TextInput = ({placeholder}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    adjustTextareaHeight(event.target);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      // You can perform your submit logic here
      console.log('Submitted:', inputValue);
      setInputValue(''); // Clear the input after submit
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto'; // Reset the height to auto to recalculate the scrollHeight
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight value
  };

  return (
    <textarea 
    className='w-full bg-white resize-none border-b py-4 peer focus:outline-none'
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      rows={1} // Set rows to 1 so that the textarea initially takes single line space
      style={{ overflow: 'hidden' }} // Hide the scrollbars initially
      placeholder={placeholder||"Type your text here..."}
    />
  );
};

export default TextInput;
