'use client'
import React from 'react'

import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from './ui/label'


export default function SelectForm({id,control,list,label,placeholder}) {
  return (
    <div className='pt-5'>
      <Label htmlFor={id} className='font-semibold text-md'>{label}</Label>
       <FormField
          control={control}
          name={id}
          render={({ field }) => (
            <FormItem >
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={`w-full`}>
                    <SelectValue placeholder={placeholder}/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                 {list?.map((item,index)=>(<SelectItem key={index} value={`${item}`}>{item}</SelectItem>))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
    </div>
  )
}
