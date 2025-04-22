import React from 'react';
import { FaTimes, FaCheck, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const Notification = ({ message, type = 'info', onClose }) => {
  const icons = {
    success: <FaCheck className="h-5 w-5" />,
    error: <FaTimes className="h-5 w-5" />,
    warning: <FaExclamationTriangle className="h-5 w-5" />,
    info: <FaInfoCircle className="h-5 w-5" />
  };

  const colors = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200'
  };

  return (
    <div className={`fixed bottom-4 right-4 max-w-sm w-full rounded-lg border p-4 shadow-lg transform transition-all duration-300 ${colors[type]}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium">
            {message}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onClose}
            className="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification; 