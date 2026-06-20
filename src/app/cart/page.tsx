"use client"

import { cartItemsType } from '@/types'
import { ArrowRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { title } from 'process'
import React from 'react'

const step = [
  {
    id: 1,
    title: "Shopping Cart"
  },
  {
    id: 2,
    title: "Shopping Address"
  },
  {
    id: 3,
    title: "Payment Method"
  },
]

//temporary data

const cartItems:cartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectSize: "l",
    selectColor: "gray"
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
      quantity: 1,
    selectSize: "l",
    selectColor: "gray"
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectSize: "l",
    selectColor: "gray"
  }
]

const CartPage = () => {
  const searchParams = useSearchParams();
  const Router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1")
  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
      <h2>Your shopping cart</h2>
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
        {
          step.map(step => (
            <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`} key={step.id}>
              <div  className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-200"}`}>
                {step.id}
              </div>
              <p>{step.title}</p>

            </div>
          ))
        }
      </div>
      {/* step and detail */}
      <div className='w-full flex flex-col lg:flex-row gap-16'>
        {/* step */}
        <div className='w-full lg:w-7/12 shadow-lg border-2 border-gray-100 p-8 rounded-lg flex flex-col gap-8'>
          1
        </div>
        {/* details */}
        <div className='w-full lg:w-5/12 shadow-lg border-2 border-gray-100 p-8 rounded-lg flex flex-col gap-8'>
        <h2 className='font-semibold'>Cart Details</h2>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>
              ${
                cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
              }
            </p>
          </div>
          <div className='flex justify-between'>
            <p>Discount (10%)</p>
            <p>
              $ 10
            </p>
          </div>
          <div className='flex justify-between'>
            <p>Shopping Fee</p>
            <p>
              $ 10
            </p>
          </div>
          <hr />
             <div className='flex justify-between'>
            <p>Total</p>
            <p>
              ${
                cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
              }
            </p>
          </div>
        </div>
        <button className='w-full bg-gray-800 hover:bg-gray-900 transition-all text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'>Continue 
          <ArrowRight className='w-3 h-3'/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
