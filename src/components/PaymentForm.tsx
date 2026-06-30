import { PaymentFormInputs, paymentFormSchema } from '@/types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import { error } from 'console'
import { ArrowRight, ShoppingCartIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const PaymentForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs) => void;}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema)
  })
  
  const router = useRouter()

  const handlePaymentForm:SubmitHandler<PaymentFormInputs> = (data)=>{

  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>
      <div className='flex flex-col gap-1'>
        <label htmlFor="cardHolder">Name on card</label>
        <input
        type="text" 
        id='cardHolder'
        placeholder='Asif Taher'
        {...register('cardHolder')}
        />
        {errors.cardHolder && <p>{errors.cardHolder.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="cardNumber">Card Number</label>
        <input
        type="text" 
        id='cardNumber'
        placeholder='0123214565'
        {...register('cardNumber')}
        />
        {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
        type="text" 
        id='expirationDate'
        placeholder='01/32'
        {...register('expirationDate')}
        />
        {errors.expirationDate && <p>{errors.expirationDate.message}</p>}

      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="cvv">CVV</label>
        <input
        type="text" 
        id='cvv'
        placeholder='123'
        {...register('cvv')}
        />
        {errors.cvv && <p>{errors.cvv.message}</p>}

      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Image src="/klarna.png" alt='kalarna' width={50} height={25} className='rounded-md'/>
        <Image src="/cards.png" alt='cards' width={50} height={25} className='rounded-md'/>
        <Image src="/stripe.png" alt='stripe' width={50} height={25} className='rounded-md'/>
      </div>
           <button type='submit' className='w-full bg-gray-800 hover:bg-gray-900 transition-all text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'>Checkout 
          <ShoppingCartIcon className='w-3 h-3'/>
        </button>
    </form>
  )
}

export default PaymentForm
