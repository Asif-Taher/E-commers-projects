import { ShippingFormInputs, shippingFormSchema } from '@/types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import { error } from 'console'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs) => void;}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  })
  
  const router = useRouter()

  const handleSubmitForm:SubmitHandler<ShippingFormInputs> = (data)=>{
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false})
  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleSubmitForm)}>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name">Name</label>
        <input
        type="text" 
        id='name'
        placeholder='Asif Taher'
        {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email</label>
        <input
        type="text" 
        id='email'
        placeholder='asifthaer@gmail.com'
        {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="phone">phone</label>
        <input
        type="phone" 
        id='phone'
        placeholder='Enter your phone number'
        {...register('phone')}
        />
        {errors.phone && <p>{errors.phone.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="address">Address</label>
        <input
        type="address" 
        id='address'
        placeholder='Enter your adddress'
        {...register('address')}
        />
        {errors.address && <p>{errors.address.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="city">City</label>
        <input
        type="city" 
        id='city'
        placeholder='Enter your city'
        {...register('city')}
        />
        {errors.city && <p>{errors.city.message}</p>}

      </div>
           <button type='submit' className='w-full bg-gray-800 hover:bg-gray-900 transition-all text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'>Continue 
          <ArrowRight className='w-3 h-3'/>
        </button>
    </form>
  )
}

export default ShippingForm
