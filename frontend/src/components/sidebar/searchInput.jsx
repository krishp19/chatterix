/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSearch } from "react-icons/fa";


function searchInput() {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="search" placeholder="Search..." className='input input-bordered rounded-full'/>
        <button type="submit" className='btn btn-circle bg-gray-200'>
          <FaSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default searchInput
