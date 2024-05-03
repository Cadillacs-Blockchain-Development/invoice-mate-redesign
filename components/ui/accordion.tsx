"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { MoveDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1818 28.3334C15.9285 28.3334 15.6751 28.2401 15.4751 28.0401L7.3818 19.9467C6.99513 19.5601 6.99513 18.9201 7.3818 18.5334C7.76846 18.1467 8.40846 18.1467 8.79513 18.5334L16.1818 25.9201L23.5685 18.5334C23.9551 18.1467 24.5951 18.1467 24.9818 18.5334C25.3685 18.9201 25.3685 19.5601 24.9818 19.9467L16.8885 28.0401C16.6885 28.2401 16.4351 28.3334 16.1818 28.3334Z"
          fill="#292D32"
        />
        <path
          d="M16.1818 28.1067C15.6352 28.1067 15.1818 27.6534 15.1818 27.1067V4.66675C15.1818 4.12008 15.6352 3.66675 16.1818 3.66675C16.7285 3.66675 17.1818 4.12008 17.1818 4.66675V27.1067C17.1818 27.6534 16.7285 28.1067 16.1818 28.1067Z"
          fill="#292D32"
        />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
