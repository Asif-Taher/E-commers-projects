import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row gap-8 md:gap-0 md:items-start md:justify-between bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href="/">
        <Image src="/logo.png" alt='logn' width={36} height={36}/>
        <p className='hidden md:block text-md font-medium tracking-wider text-white'>Trend</p>
        </Link>
        <p className='text-md text-gray-400'>© Trend</p>
        <p className='text-md text-gray-400'>All Rignt Reserved</p>
      </div>
      <div className='flex flex-col gap-4 items-center text-gray-400 md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms and Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className='flex flex-col gap-4 items-center text-gray-400 md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms and Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className='flex flex-col gap-4 items-center text-gray-400 md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms and Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
