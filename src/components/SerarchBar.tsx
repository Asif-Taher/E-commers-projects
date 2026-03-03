import { Search } from 'lucide-react'
import React from 'react'

const SerarchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1'>
     <Search />
     <input id='search' placeholder='Search...' className='text-sm outline-0'/>
    </div>
  )
}

export default SerarchBar
