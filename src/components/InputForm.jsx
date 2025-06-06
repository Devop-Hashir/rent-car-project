'use client'
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FormControl, FormField, FormItem } from "./ui/form";


export default function InputForm({ id, control, type, label, placeholder }) {
  return (
    <div>
      <div className="pt-5">
        <Label htmlFor={id} className="font-semibold text-md">
          {label}
        </Label>
        <FormField
          control={control}
          name={id}
          render={({ field }) => (
            <FormItem className={`border border-gray-300 bg-slate-100 my-3 rounded-md`}>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  type={type}
                  className="bg-slate-100"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
