// import Image from 'next/image';
import { LuPhoneCall, LuMessageSquareText } from 'react-icons/lu';
import { FiVideo } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa'; // For meetups

export const TimelineCard = ({ currentEntry }) => {
  // Dynamic icon selector based on your 'type' key
  const getIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'call': return <LuPhoneCall className="text-emerald-700 w-5 h-5" />;
      case 'text': return <LuMessageSquareText className="text-emerald-700 w-5 h-5" />;
      case 'video': return <FiVideo className="text-emerald-700 w-5 h-5" />;
      default: return <FaHandshake className="text-emerald-700 w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col items-center w-full">

      {/* 💳 The Card Body */}
      <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-200">
        
        {/* Rounded Icon Backdrop Wrapper */}
        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
          {/* ✅ FIX: Changed from currentCheckIn to type */}
          {getIcon(currentEntry?.type)}
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold text-[#244D3F]">
            {/* ✅ FIX: Changed from currentCheckIn to type (with optional chaining ?) */}
            {currentEntry?.type ? currentEntry.type.charAt(0).toUpperCase() + currentEntry.type.slice(1) : 'Interaction'} 
            <span className="text-gray-400 font-normal ml-1">with {currentEntry?.name}</span>
          </h4>
          
          <span className="text-xs font-medium text-slate-400">
            {/* ✅ FIX: Changed from theDate to date */}
            {currentEntry?.date}
          </span>
        </div>
      </div>
    </div>
  );
};