"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import Link from 'next/link'

const formSchema = z.object({
 fName:z.string(),
 lName:z.string(),
 email:z.string(),
 loanAmt:z.string(),
 message:z.string().optional(),
})

const RequestForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        console.log(values)
      }
  return (
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="gap-6 grid grid-cols-2 content-stretch h-full">

      <FormField
        control={form.control}
        name="fName"
        render={({ field }) => (
            <FormItem >
            <FormLabel>First Name</FormLabel>
            <FormControl className='rounded-full '>
              <Input placeholder="First Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="lName"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl className='rounded-full'>
              <Input placeholder="Last Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl className='rounded-full'>
              <Input placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="loanAmt"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl className='rounded-full'>
              <Input placeholder="Loan Amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="message"
    
        render={({ field }) => (
            <FormItem className='col-span-2'>
            <FormLabel>Message</FormLabel>
            <FormControl className='rounded-[30px]'>
              <Textarea {...field} rows={8}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormDescription className='col-span-2 text-[#667085] flex flex-col gap-6'> 
        <span>Give a briet overview of your companies invoice receivables detals and use of funds.</span>
        <span>Email us at <Link href={"mailto:finance@invoicemate.net"} className='underline'>finance@invoicemate.net</Link></span>
        </FormDescription>
      
      <Button type="submit" className='rounded-full w-full col-span-2 bg-[#9E2654]'>Submit</Button>
    </form>
  </Form>
  )
}

export default RequestForm