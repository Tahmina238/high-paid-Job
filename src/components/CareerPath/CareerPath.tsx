import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareerPath() {
  return (
    <div className="container mx-auto px-4 py-2   ">
      <div className="text-center mb-8 text-white">
        <h1 className="text-3xl font-bold leading-tight">
          Your path to a High-Paying career
        </h1>
        <p className="text-white mt-1 leading-tight ">
          Follow our proven step-by-step process to land your dream job
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Career Path Steps */}
        <div className="space-y-6 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 top-8 bottom-0 w-[1px] bg-gray-200"></div>

          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium z-10 relative">
                01
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white leading-tight">
                Pick Your Plan
              </h3>
              <p className="text-sm text-white mt-1 leading-tight">
                Find out options among them: Placement, assessment, guidance,
                technical coaching, quick refine and placement.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium z-10 relative">
                02
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">Your Career Assessment</h3>
              <p className="text-sm text-white mt-1">
                Get one-on-one coaching and assessment until your placement is
                confirmed in 8 to 12 weeks.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium z-10 relative">
                03
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">
                Access 500+ Active Recruiters
              </h3>
              <p className="text-sm text-white mt-1">
                We&apos;ll review your resume, connect you with recruiters, and
                prepare you for interviews.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium z-10 relative">
                04
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">
                Ready Job Offer within 10 Interviews
              </h3>
              <p className="text-sm  mt-1 ">
                Our 500+ active recruiters will help you land multiple job
                offers within the first 10 interviews.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium z-10 relative">
                05
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">
                Renegotiation for Extra $10k
              </h3>
              <p className="text-sm text-white mt-1">
                When your final salary is decided, we will step in to
                renegotiate get you extra $10k.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium z-10 relative">
                06
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white">
                Support During Probation Period
              </h3>
              <p className="text-sm text-white mt-1">
                Receive full support during your probation period to ensure your
                success.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Job Prep Tracks */}
        <div className="border-b-8 rounded-lg overflow-hidden">
          <div className="bg-primary text-white py-2 px-4 font-bold">
            Job Prep Tracks
          </div>
          <div className="p-4 space-y-4">
            {/* Track Items */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">CloudOps/DevOps (AWS)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">Full-Stack Web/Mobile (MERN)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">Project/Product Management</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">SQA Engineering</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">Front-End Developer</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">Back-End Developer</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">Software Engineer</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">AI Engineer</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border  flex items-center justify-center bg-cyan-100  text-green-600">
                <Check size={16} />
              </div>
              <span className="text-white">More</span>
            </div>

            <div className="border-t pt-4 mt-4">
              <p className="text-sm text-white">
                All tracks include job placement 99.99% guarantee to follow our
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2">
          Book Free Consultation
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
