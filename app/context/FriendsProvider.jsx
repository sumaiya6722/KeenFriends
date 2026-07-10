// import React from 'react
'use client'
import { useState } from "react";
import { FriendsContext } from './FriendsContext';
import { toast } from "react-toastify";


const FriendsProvider = ({ children }) => {
  const [currentTimelineEntry, setCurrentTimelineEntry] = useState([]);
  const [activeEntries, setActiveEntries] = useState('all');

  const handleCheckIn = (currentCheckIn, name, theDate) => {
    const newEntry = {
      type: currentCheckIn,
      name: name,
      date: theDate
    };
    setCurrentTimelineEntry([...currentTimelineEntry, newEntry]);
    toast.success(`Contacted with ${name} successfully via ${currentCheckIn}`)
  }

  const handleFilter = (filter) => {
    setActiveEntries(filter);
  }

  const filteredEntries = activeEntries === 'all'? currentTimelineEntry : currentTimelineEntry.filter((c)=> c.type==activeEntries)


  const data = { currentTimelineEntry, handleCheckIn, handleFilter, filteredEntries, activeEntries };

  return (
    <FriendsContext.Provider value={data}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;