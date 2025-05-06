"use client";

import { Check, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingComparison() {
  return (
    <div className="w-full bg-gray-900 py-16 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-white mb-3">
          Unlock Your Career Freedom!
        </h1>
        <p className="text-gray-300 mb-10">
          Choose the assessment plan that works best for you with our flexible
          payment options
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-4">
              <h3 className="text-lg font-bold">Plan: Starter</h3>
              <p className="text-sm text-gray-400">Quick 30 min interview</p>

              <div className="mt-4">
                <p className="text-sm text-gray-400">Starting from</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$49.99</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">One time payment</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">30 Min Interview.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Provide Recording.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Interview Assessment.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Delivery: 1 to 3 days.</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Receive details report and next action plan.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Provide 30 Local recruiter (email to large companies for open
                  position)
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">
                Pay Now <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>

          {/* Essential Plan */}
          <Card className="bg-blue-900 border-blue-800 text-white relative">
            <div className="absolute -right-2 top-4">
              <div className="bg-amber-500  text-xs font-medium px-4 py-2 rounded relative">
                Most Popular
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 7.90332 7.90332"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-8 right-0"
                >
                  <path
                    d="M0 0L7.9 0L0 7.9L0 0Z"
                    fill="#F6A934"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <CardHeader className="pb-4">
              <h3 className="text-lg font-bold">Plan: Essential</h3>
              <p className="text-sm text-gray-300">
                60 min technical interview and resume assessment
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-300">Starting From</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$99.99</span>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Upfront deposit, $99.99 installment for 24 months; Interest
                  FREE
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm text-gray-100">60 min Interview.</p>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm text-gray-100">
                  Deliver: Recording Interview, Resume Assessment and guidance!
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm text-gray-100">
                  Receive: details report and next action plan.
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm text-gray-100">
                  50 Local recruiter (email to large companies for open
                  position)
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                Pay Now <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-4">
              <h3 className="text-lg font-bold">Plan: Premium</h3>
              <p className="text-sm text-gray-400">
                Interview, resume and current job application assessment
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-400">Starting From</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$149.99</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Upfront deposit, $149.99 installment for 24 months; Interest
                  FREE
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Duration: 2 Hours</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Recruiter Interview</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Tech Interview</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Behavior Interview</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">Resume Assessment</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Current job application assessment
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Receive: details report and next action plan
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  70 Local recruiter (email to large companies for open
                  position)
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">
                Pay Now <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
