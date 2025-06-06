'use client'
import React from 'react'
import { Form } from './ui/form'
import { Input } from './ui/input'
import InputForm from './InputForm'

export default function Contact({form}) {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 mx-10 md:mx-[10%] my-10">
      <Form {...form}>
        <form className="w-full bg-white border shadow-md p-5">
            <div className='flex flex-wrap '>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <InputForm
            type="text"
            label="First Name"
            placeholder='Enter Your First Name'
            id='firstName'
            control={form.control}
          />
         </div>
         <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <InputForm
            type="text"
            label="Last Name"
            placeholder='Enter Your Last Name'
            id='lastName'
            control={form.control}
          />
          </div>
         <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <InputForm
            type="email"
            label="Email"
            placeholder='Enter Your Email'
            id='email'
            control={form.control}
          />
          </div>
         <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <InputForm
            type="number"
            label="Number"
            placeholder='Enter Your Number'
            id='number'
            control={form.control}
          />
          </div>
         <div className='w-full px-3 mb-6 md:mb-0'>
          <InputForm
            type="text"
            label="Comment"
            placeholder='Enter a Comment'
            id='comment'
            control={form.control}
          />
          </div>
         </div>
         
        </form>
      </Form>
    </div>
    </div>
  )
}
