'use client'
import friends from '@/public/data.json';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { LuArchive, LuBellRing, LuMessageSquareText, LuPhoneCall } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiVideo } from 'react-icons/fi';
import { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext'
// import { useState } from 'react';




const FriendsDetails = () => {

  const { id } = useParams(); //gets the dynamic id

  // const [checkIn, setCheckIn] = useState('');

  const { handleCheckIn } = useContext(FriendsContext);

  // Note: We use Number(id) because params are strings, but our JSON ids are numbers
  const friendsDetails = friends.find((friend) => friend.id === Number(id));
  if (!friendsDetails) {
    notFound();
  }
  const { picture, name, days_since_contact, status, goal, tags, bio, email, next_due_date } = friendsDetails;


  const statusColors = {
    "overdue": "bg-error text-error-content",       // Red
    "almost-due": "bg-warning text-warning-content", // Yellow
    "on-track": "bg-success text-success-content"   // Green
  };

  const currentData = (dateObj) => {
    const data = Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(dateObj);
    return data;
  }

  // 4. Generate the current date and time right now
  const dateObj = new Date();
  const theDate = currentData(dateObj)




  return (
    <div className='grid grid-cols-5 grid-rows-7 gap-5 container mx-auto p-20'>

      {/* section-1  */}
      <div className=' bg-white shadow-md rounded-md row-span-4 col-span-2 p-10 text-center'>
        <ul className='space-y-3'>
          <li>
            <div className="w-24 h-24 mx-auto overflow-hidden rounded-full aspect-square relative">
              <Image className="object-cover" sizes="96px" priority={id <= 4} src={picture} fill alt="home"></Image>
            </div></li>
          <li><h3 className='text-xl font-semibold'>{name}</h3></li>
          <li><span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[status]}`}>{status}</span></li>

          <li className='flex items-center justify-center gap-2'>{tags.map((tag, ind) => <button key={ind} className="btn btn-soft btn-success rounded-full">{tag}</button>)}</li>

          <li className='text-[#64748B] italic'>`{bio}`</li>
          <li className='text-[#64748B] text-lg'>{email}</li>
        </ul>
      </div>

      {/* section-2  */}
      <div className=' bg-white shadow-md rounded-md row-span-2 col-span-1 p-5 flex flex-col gap-1 justify-center items-center'>
        <h3 className='text-2xl font-semibold'>{days_since_contact}</h3>
        <p className='text-[#64748B] text-lg'>Days Since Contact</p>
      </div>
      {/* section-3  */}
      <div className=' bg-white shadow-md rounded-md row-span-2 col-span-1 p-5 flex flex-col gap-1 justify-center items-center'>
        <h3 className='text-2xl font-semibold'>{goal}</h3>
        <p className='text-[#64748B] text-lg'>Goal(Days)</p>
      </div>
      {/* section-4  */}
      <div className=' bg-white shadow-md rounded-md row-span-2 col-span-1 p-5 flex flex-col gap-1 justify-center items-center'>
        <h3 className='text-2xl font-semibold'>{next_due_date}</h3>
        <p className='text-[#64748B] text-lg'>Next Due</p>
      </div>

      {/* section-5  */}
      <div className=' bg-white shadow-md rounded-md row-span-2 col-span-3 flex justify-between pt-8 px-5'>
        <div className='text-2xl'>
          <h2 className='font-semibold text-[#244D3F] mb-7'>Relationship Goal</h2>
          <p className='text-xl text-[#64748B] '>Contact Every <span className='font-bold text-black'>30 days</span></p>
        </div>
        <button className='btn btn-active bg-gray-200 text-lg'>Edit</button>
      </div>

      {/* section-6  */}

      <div className='cursor-pointer bg-white shadow-md rounded-md row-span-1 col-span-2 pt-7'>
        <h3 className='flex gap-2 items-center justify-center font-semibold text-xl'><LuBellRing />Snooze 2 Weeks</h3>
      </div>
  

      {/* section-7  */}
      <div className='bg-white rounded-md shadow-md row-span-3 col-span-3 px-15 py-15'>
        <h3 className='pb-3 text-2xl font-semibold text-[#244D3F]'>Quick Check-In</h3>
        <div className='grid grid-cols-3 gap-3 text-2xl'>

          <div onClick={() => handleCheckIn('call',name,theDate,picture)} className='bg-[#F8FAFC] p-7 cursor-pointer flex flex-col items-center gap-1 rounded-xl font-semibold border border-gray-200'>
            <LuPhoneCall /><h3>Call</h3></div>

          <div onClick={() => handleCheckIn('text',name,theDate,picture)} className='bg-[#F8FAFC] p-7 cursor-pointer flex flex-col items-center gap-1 rounded-xl font-semibold border border-gray-200 '><LuMessageSquareText /><h3>Text</h3></div>

          <div onClick={() => handleCheckIn('video',name,theDate,picture)} className='bg-[#F8FAFC] p-7 cursor-pointer flex flex-col items-center gap-1 rounded-xl font-semibold border border-gray-200 '><FiVideo /><h3>Video</h3></div>


        </div>
      </div>

      {/* section-8  */}
      <div className='cursor-pointer bg-white shadow-md rounded-md row-span-1 col-span-2 pt-7'>
        <h3 className='flex gap-2 items-center justify-center font-semibold text-xl'><LuArchive />Archive</h3>
      </div>

      {/* section-9  */}
      <div className='cursor-pointer bg-white shadow-md rounded-md row-span-1 col-span-2 pt-7'>
        <h3 className='flex gap-2 items-center justify-center font-semibold text-xl text-red-600'><RiDeleteBin6Line />Delete</h3>
      </div>


    </div>
  );
};

export default FriendsDetails;