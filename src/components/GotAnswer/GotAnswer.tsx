import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function GotAnswer() {
  return (
    <div className="w-full bg-secondary border radias py-6 px-4 m-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold   mb-2">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-gray-400">
            Find answers to our most frequently asked questions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="border  rounded-md overflow-hidden"
          >
            <AccordionTrigger className="bg-background text-lg px-4 py-3 text-left font-medium  transition-all">
              How fast can I get a job?
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-white ">
              Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks of
              training + 4-6 weeks to an offer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border  rounded-md overflow-hidden"
          >
            <AccordionTrigger className="bg-background  text-lg px-4 py-3 text-left font-medium  transition-all">
              What if I don&apos;t get hired?
            </AccordionTrigger>
            <AccordionContent className=" px-4 py-3 text-gray-300">
              We offer a job guarantee program. If you don&apos;t get hired
              within a certain timeframe after completing our program, you may
              be eligible for a refund or additional support services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border  rounded-md overflow-hidden"
          >
            <AccordionTrigger className="bg-background  px-4 py-3 text-left font-medium  transition-all">
              Can I work remotely?
            </AccordionTrigger>
            <AccordionContent className=" px-4 py-3 text-gray-300">
              Yes, many of our graduates secure remote positions. We prepare you
              for both remote and in-office opportunities, and our hiring
              partners offer various work arrangements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border  rounded-md overflow-hidden"
          >
            <AccordionTrigger className="bg-background  px-4 py-3 text-left font-medium  transition-all">
              Who is this program for?
            </AccordionTrigger>
            <AccordionContent className=" px-4 py-3 text-gray-300">
              Our program is designed for motivated individuals looking to start
              or advance their career in technology. Whether you&apos;re a
              complete beginner or looking to upskill, our curriculum can be
              tailored to your experience level.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border  rounded-md overflow-hidden"
          >
            <AccordionTrigger className=" bg-background px-4 py-3 text-left font-medium  transition-all">
              Do I need prior experience?
            </AccordionTrigger>
            <AccordionContent className=" px-4 py-3 text-gray-300">
              No prior experience is required. Our program starts with the
              fundamentals and progressively builds your skills. We&apos;ve
              designed our curriculum to accommodate students from all
              backgrounds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border  rounded-md overflow-hidden"
          >
            <AccordionTrigger className=" bg-background px-4 py-3 text-left font-medium  transition-all">
              What companies hire your graduates?
            </AccordionTrigger>
            <AccordionContent className=" px-4 py-3 text-gray-300">
              Our graduates have been hired by a wide range of companies, from
              startups to Fortune 500 corporations. Some of our hiring partners
              include tech companies, financial institutions, healthcare
              organizations, and more.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mt-10">
          <p className="mb-4">
            Have more questions? Ask us during your FREE consultation!
          </p>
          <Button className="bg-blue-600 mx-auto hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
            Book Free Consultation
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
