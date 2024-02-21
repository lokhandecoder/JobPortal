import React, { useState } from 'react';

function CollapsibleItem({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative m-4 shadow-md rounded-lg overflow-hidden ${isOpen ? 'shadow bg-gray-100' : ''}`}>
      <h6 className="mb-0 ">
        <button
        style={{ backgroundColor : "#20c997", color: "white"}}
          className={`relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid   cursor-pointer rounded-lg group text-dark-500 ${isOpen ? 'group-open' : ''}`}
          onClick={toggleCollapse}
        >
          <span >{title}</span>
          <i className={`absolute right-0 pt-1 text-base transition-transform fas fa-chevron-down ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h6>
      <div
        className={`h-0 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'h-auto' : ''}`}
      >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleItem;
