import { ArrowRight, Briefcase, GraduationCap, Search } from "lucide-react";

export default function Home() {
  return (
    <div className=" bg-background from-gray-900 to-gray-950  flex flex-col items-center justify-between p-4">
      <div className="  ">
        <div className=" container mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Choose Your Path to Land Your Dream Job
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Select the career path that aligns with your goals and unlock your
            professional potential
          </p>
        </div>

        <div className="mt-8 py-12 flex justify-between align-center gap-6">
          {/* Left side - Options */}
          <div className="space-y-4 gap-8">
            <button className="w-lg  bg-secondary radias border p-4 rounded-md flex items-center gap-3 text-left ">
              <div className="bg-transparent p-2 rounded-md">
                <Briefcase className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-xl font-medium">Job Assessment</span>
            </button>

            <button className="w-full p-4 bg-secondary border radias rounded-md flex items-center text-left ">
              <div className="bg-transparent p-2 rounded-md">
                <GraduationCap className="h-6 w-6 text-gray-400" />
              </div>
              <span className="text-xl font-medium">Job Placement</span>
            </button>

            <button className="w-full bg-secondary border radias p-4 rounded-md flex items-center text-left ">
              <div className="bg-transparent p-2 rounded-md">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <span className="text-xl font-medium">Job Prep</span>
            </button>
          </div>

          {/* Right side - Details */}
          <div className="bg-secondary border radias rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-start gap-3">
                <div className="min-w-5 text-blue-500">•</div>
                <div>30 to 120 min interview</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-5 text-blue-500">•</div>
                <div>40 to 70 local recruiter access</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-5 text-blue-500">•</div>
                <div>Salary negotiation blueprint</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-5 text-blue-500">•</div>
                <div>Probation period hacks</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-5 text-blue-500">•</div>
                <div>Provided recording with details report</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-5 text-blue-500">•</div>
                <div>
                  Help revamp the resume and tailoring for each job needs
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-colors">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
