// import React from 'react';
'use client'

import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";
import { TimelineCard } from "../components/TimelineCard";
// import noFound from '../not-found';
// import { notFound } from "next/navigation";

const TimeLine = () => {
  const { handleFilter, filteredEntries } = useContext(FriendsContext);


  return (
    <div className="p-20 text-start">
      <h1 className="text-4xl font-bold mb-5">Timeline</h1>
      <div className="">
        <select defaultValue="Filter timeline" className="select p-2">
          <option disabled={true}>Filter Timeline</option>
          <option onClick={() => handleFilter('call')}>Call</option>
          <option onClick={() => handleFilter('text')}>Text</option>
          <option onClick={() => handleFilter('video')}>Video</option>
        </select>
      </div>

      <div className="flex flex-col w-full gap-3 mt-5">
        {filteredEntries.length === 0 ? <p className="text-slate-400 italic text-center">No matching check-ins found.</p> :
          filteredEntries.map((currentEntry, ind) => <TimelineCard key={ind} currentEntry={currentEntry}></TimelineCard>)
        }

      </div>

    </div>
  );
};

export default TimeLine;