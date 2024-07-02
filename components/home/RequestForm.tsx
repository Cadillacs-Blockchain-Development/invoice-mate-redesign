"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import emailjs from "@emailjs/browser"
import { emailConfig } from "@/utils/emailJs";
import { Toaster, toast } from 'sonner';

const formSchema = z.object({
  fName: z.string(),
  lName: z.string(),
  email: z.string(),
  loanAmt: z.string(),
  message: z.string().optional(),
});

const RequestForm = () => {
  
    
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
     const {serviceId,templateId,publicKey} = emailConfig()
      emailjs.send(serviceId,templateId,values,publicKey).then(
      (response) => {
         toast.success(`🎉 Form submitted successfully! Thank you, ${values.fName}.`, {
          position: "top-right"
        });
        form.reset({
          fName: "",
          lName: "",
          email: "",
          loanAmt: "",
          message: "",
        })
      },
      (error) => {
        toast.error('🚨 There was an error submitting the form.', {
          position: "top-right"
        });
      },
    )
  }

  
  return (
    <>
    <Toaster/>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid h-full grid-cols-2 content-stretch gap-6"
      >
        <FormField
          control={form.control}
          name="fName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl className="rounded-full ">
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
              <FormControl className="rounded-full">
                <Input placeholder="Last Name" {...field}  />
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
              <FormLabel>Email</FormLabel>
              <FormControl className="rounded-full">
                <Input placeholder="Email" {...field}  />
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
              <FormLabel>Loan Amount</FormLabel>
              <FormControl className="rounded-full">
                <Input placeholder="Loan Amount" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl className="rounded-[30px]">
                <Textarea {...field} rows={8}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription className="col-span-2 flex flex-col gap-6 text-[#667085]">
          <span>
            Give a brief overview of your company&apos;s invoice receivables
            details and use of funds
          </span>
          <span>
            Email us at{" "}
            <Link href={"mailto:finance@invoicemate.net"} className="underline">
              finance@invoicemate.net
            </Link>
          </span>
        </FormDescription>

        <Button
          type="submit"
          className="col-span-2 w-full rounded-full bg-[#9E2654]"
        >
          Submit
        </Button>
      </form>
    </Form>
    </>
  );
};

export default RequestForm;
