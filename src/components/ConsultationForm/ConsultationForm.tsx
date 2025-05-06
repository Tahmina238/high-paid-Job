"use client";

import type React from "react";
import { format } from "date-fns";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function ConsultationForm() {
  const [date, setDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container border bg-secondary rounded-md my-18 mx-auto max-w-screen-2xl ">
      <form className=" p-8" onSubmit={handleSubmit}>
        <h1 className="text-4xl text font-bold ">
          Book a FREE Career Consultation
        </h1>
        <p className="mt-2  ">
          Please fill out the form below to schedule a 15-minute career auditing
          session
        </p>

        <div className=" container mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label className="flex ">
              Name <span className="ml-1 text-red-500">*</span>
            </Label>
            <input
              id="name"
              placeholder="Enter your name"
              className="w-full border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="flex ">
              Mobile <span className="ml-1 text-red-500">*</span>
            </Label>
            <input
              id="mobile"
              placeholder="Enter your mobile number"
              className="w-full border"
              required
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label className="flex ">
            Email <span className="ml-1 text-red-500">*</span>
          </Label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full text-white border "
            required
          />
        </div>

        <div className="mt-6 border space-y-2">
          <Label className="flex ">
            What is the best time for a 15-minute career auditing session?{" "}
            <span className="ml-1  text-red-500">*</span>
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal",
                  !date && "text-gray-400"
                )}
              >
                {date ? format(date, "PPP") : "Select date and time"}
                <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <p className="text-sm text-gray-500">
            Select your preferred date and time for the meeting.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label className="flex ">
              Are you currently employed?{" "}
              <span className="ml-1 text-red-500">*</span>
            </Label>
            <RadioGroup className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="text-white"
                  value="yes"
                  id="employed-yes"
                />
                <Label className="font-normal">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="text-white"
                  value="no"
                  id="employed-no"
                />
                <Label className="font-normal">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3 p-2">
            <Label className="flex ">
              Are you looking for job switch?{" "}
              <span className="ml-1 text-red-500">*</span>
            </Label>
            <RadioGroup className="flex flex-col  space-y-2">
              <div className="flex items-center  space-x-2">
                <RadioGroupItem
                  className="text-white"
                  value="yes"
                  id="switch-yes"
                />
                <Label className="font-normal">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="text-white"
                  value="no"
                  id="switch-no"
                />
                <Label className="font-normal  ">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="mt-8 flex justify-start">
          <Button type="submit" className="bg-blue-600 px-8 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
