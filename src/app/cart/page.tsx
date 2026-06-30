"use client"

import PaymentForm from '@/components/PaymentForm'
import ShippingForm from '@/components/ShippingForm'
import { cartItemsType, ShippingFormInputs } from '@/types'
import { ArrowRight, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { title } from 'process'
import React, { useState } from 'react'

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
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1")
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
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
          {
            activeStep === 1 ? (
              cartItems.map((item) => (
                // single cart item
                <div className='flex items-center justify-between' key={item.id}>
                  {/* image and cart */}
                  <div className='flex gap-8'>
                        <div className='relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden'>
                          <Image 
                          src={item.images[item.selectColor]}
                          alt={item.name}
                          fill
                          className='object-contain'
                          ></Image>
                        </div>
                        {/* item detail */}
                        <div className='flex flex-col justify-between'>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-medium'>{item.name}</p>
                            <p className='text-xs text-gray-500'>Quantity: {" "}{item.quantity}</p>
                            <p className='text-xs text-gray-500'>Size: {" "}{item.selectSize}</p>
                            <p className='text-xs text-gray-500'>color: {" "}{item.selectColor}</p>
                          </div>
                          <p className='font-medium'>${item.price.toFixed(2)}</p>
                        </div>
                  </div>
                  {/* delete button */}
                  <button className='w-8 h-8 rounded-full bg-red-100 text-red-400 flex items-center justify-center cursor-pointer'>
                    <Trash2 className='w-3 h-3'/>
                  </button>
                </div>
              ))
            ) : activeStep === 2 ? (<ShippingForm setShippingForm={setShippingForm}/>) : activeStep === 3  && shippingForm ? (
              <p>Please fill in the shopping form continues</p>
            ) : (<PaymentForm />)
          }
        </div>
        {/* details */}
        <div className='w-full lg:w-5/12 shadow-lg border-2 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max'>
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
        {
          activeStep === 1 && (
        <button onClick={() => router.push("/cart?step=2", {scroll: false})} className='w-full bg-gray-800 hover:bg-gray-900 transition-all text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'>Continue 
          <ArrowRight className='w-3 h-3'/>
        </button>

          )
        }
        </div>
      </div>
    </div>
  )
}

export default CartPage
