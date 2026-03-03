import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SerarchBar from './SerarchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between border-b border-gray-200 pb-4'>
        <Link href="/" className='flex items-center'>
        <Image src="/logo.png" alt='logo' width={36} height={36} className='w-6 h-6 md:w-9 md:h-9'/>
        <p className='hidden md:block text-md font-medium tracking-wider'>Trend</p>
        </Link>
        <div className='flex items-center gap-6'>
           <SerarchBar />
           <Link href="/">
           <Home className='h-4 w-4 text-gray-600'/>
            </Link>
           <Bell className='h-4 w-4 text-gray-600'/>
           <ShoppingCart className='h-4 w-4 text-gray-600'/>
           <Link href="/login">Sign in</Link>
        </div>
    </nav>
  )
}

export default Navbar
