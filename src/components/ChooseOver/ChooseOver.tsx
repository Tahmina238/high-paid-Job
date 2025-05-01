import { Check, X } from "lucide-react";
import Link from "next/link";

export default function ChooseOver() {
  return (
    <div className="  container bg-gray-900 text-white mx-auto px-4">
      <div className="  md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Why Choose Us Over Others?
          </h2>
          <p className="text-gray-400">
            See how our program delivers results where others fall short
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <svg
                width="50.000000"
                height="49.988037"
                viewBox="0 0 50 49.988"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-9 md:h-auto w-9 md:w-auto"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <linearGradient
                    x1="0.000000"
                    y1="24.994041"
                    x2="50.000000"
                    y2="24.994041"
                    id="paint_linear_1_1987_0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00F2FE"></stop>
                    <stop offset="0.021000" stop-color="#03EFFE"></stop>
                    <stop offset="0.293000" stop-color="#24D2FE"></stop>
                    <stop offset="0.554000" stop-color="#3CBDFE"></stop>
                    <stop offset="0.796000" stop-color="#4AB0FE"></stop>
                    <stop offset="1.000000" stop-color="#4FACFE"></stop>
                  </linearGradient>
                </defs>
                <path
                  id="Vector"
                  d="M50 14.84L50 24.6C50 25.68 49.12 26.56 48.04 26.56C46.96 26.56 46.09 25.68 46.09 24.6L46.09 14.84C46.09 12.68 44.34 10.93 42.18 10.93C41.1 10.93 40.23 10.06 40.23 8.98C40.23 7.9 41.1 7.03 42.18 7.03C46.49 7.03 50 10.53 50 14.84ZM48.04 32.42C46.96 32.42 46.09 33.29 46.09 34.37C46.09 36.52 44.34 38.28 42.18 38.28L7.81 38.28C5.65 38.28 3.9 36.52 3.9 34.37L3.9 14.84C3.9 12.82 5.41 11.15 7.41 10.95C8.49 10.85 9.27 9.89 9.17 8.82C9.06 7.74 8.1 6.96 7.03 7.06C5.11 7.26 3.33 8.15 2.03 9.58C0.72 11.02 0 12.89 0 14.84L0 34.37C0 38.68 3.5 42.18 7.81 42.18L23.04 42.18L23.04 46.08L16.21 46.08C15.13 46.08 14.25 46.95 14.25 48.03C14.25 49.11 15.13 49.98 16.21 49.98L33.78 49.98C34.86 49.98 35.74 49.11 35.74 48.03C35.74 46.95 34.86 46.08 33.78 46.08L26.95 46.08L26.95 42.18L42.18 42.18C46.49 42.18 50 38.68 50 34.37C50 33.29 49.12 32.42 48.04 32.42ZM25 27.92L25.09 27.92C29.76 27.92 34.13 24.82 36.24 20.02C36.68 19.03 36.23 17.88 35.24 17.44C34.25 17.01 33.1 17.46 32.67 18.45C31.2 21.78 28.16 24.02 25.09 24.02L25 24.02C20.6 24.02 16.6 19.53 16.6 14.59L16.6 7.83L25.05 4.05L31.96 7.14L27.4 13.53C27.23 13.72 27.03 13.76 26.92 13.76C26.81 13.77 26.59 13.76 26.39 13.57C26.38 13.56 26.37 13.55 26.36 13.54L22.61 10.11C21.82 9.38 20.58 9.43 19.85 10.23C19.12 11.02 19.18 12.26 19.97 12.99L23.71 16.41C24.57 17.22 25.71 17.67 26.88 17.67C26.98 17.67 27.08 17.67 27.18 17.66C28.46 17.57 29.66 16.95 30.47 15.95C30.49 15.92 30.51 15.89 30.53 15.86L38.9 4.16C39.53 3.28 39.32 2.06 38.44 1.43C37.57 0.81 36.35 1.01 35.72 1.89L34.28 3.9L25.94 0.17C25.69 0.05 25.42 0 25.14 0L24.95 0C24.68 0 24.41 0.05 24.15 0.17L13.84 4.79C13.14 5.1 12.69 5.8 12.69 6.57L12.69 14.59C12.69 17.85 13.97 21.18 16.21 23.72C18.6 26.43 21.72 27.92 25 27.92Z"
                  fill="url(#paint_linear_1_1987_0)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Guaranteed Job Placement
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              We guarantee you&apos;ll get hired or we keep working with you for
              free
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">HighPaidJobs</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">Others</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gray-700 rounded p-2 text-xs text-center">
              95.99% success rate within 8-16 weeks
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <svg
                width="50.000000"
                height="50.000000"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-9 md:h-auto w-9 md:w-auto"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <linearGradient
                    x1="0.000000"
                    y1="25.000000"
                    x2="50.000000"
                    y2="25.000000"
                    id="paint_linear_1_2014_0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00F2FE"></stop>
                    <stop offset="0.020800" stop-color="#03EFFE"></stop>
                    <stop offset="0.293100" stop-color="#24D2FE"></stop>
                    <stop offset="0.553800" stop-color="#3CBDFE"></stop>
                    <stop offset="0.795600" stop-color="#4AB0FE"></stop>
                    <stop offset="1.000000" stop-color="#4FACFE"></stop>
                  </linearGradient>
                </defs>
                <path
                  id="Vector"
                  d="M48.04 27.57C49.12 27.57 50 26.7 50 25.62L50 21.61C50 18.13 47.16 15.29 43.68 15.29L22.43 15.29C21.93 15.29 21.45 15.35 20.99 15.46L20.99 6.02C20.99 2.7 18.29 0 14.97 0L6.02 0C2.7 0 0 2.7 0 6.02L0 22.81C0 26.13 2.7 28.83 6.02 28.83L10.86 28.83C10.76 29.37 10.7 29.93 10.7 30.5C10.7 33 11.76 35.26 13.45 36.86C9.45 39 6.73 43.21 6.73 48.04C6.73 49.12 7.6 50 8.68 50L43.16 50C44.24 50 45.12 49.12 45.12 48.04C45.12 46.96 44.24 46.09 43.16 46.09L40.73 46.09L40.73 43.03L43.68 43.03C47.16 43.03 50 40.19 50 36.71L50 35.39C50 34.31 49.12 33.43 48.04 33.43C46.96 33.43 46.09 34.31 46.09 35.39L46.09 36.71C46.09 38.04 45.01 39.12 43.68 39.12L28.57 39.12C27.67 38.23 26.65 37.46 25.53 36.86C27.22 35.26 28.28 33 28.28 30.5C28.28 25.86 24.62 22.04 20.01 21.77L20.01 21.61C20.01 20.28 21.1 19.2 22.43 19.2L43.68 19.2C45.01 19.2 46.09 20.28 46.09 21.61L46.09 25.62C46.09 26.7 46.96 27.57 48.04 27.57ZM6.02 3.9L14.97 3.9C16.13 3.9 17.08 4.85 17.08 6.02L17.08 16.84L3.9 16.84L3.9 6.02C3.9 4.85 4.85 3.9 6.02 3.9ZM12.66 24.92L6.02 24.92C4.85 24.92 3.9 23.98 3.9 22.81L3.9 20.74L16.17 20.74C16.13 21.03 16.11 21.32 16.11 21.61L16.11 22.43C14.79 22.98 13.63 23.85 12.73 24.93C12.7 24.92 12.68 24.92 12.66 24.92ZM36.83 43.03L36.83 46.09L32.1 46.09C31.94 45.02 31.64 43.99 31.22 43.03L36.83 43.03ZM28.13 46.09L10.85 46.09C11.75 42.18 15.28 39.25 19.48 39.25L19.49 39.25C19.49 39.25 19.5 39.25 19.5 39.25C23.7 39.25 27.23 42.18 28.13 46.09ZM24.37 30.5C24.37 33.17 22.18 35.34 19.5 35.34C19.49 35.34 19.49 35.34 19.49 35.34C19.49 35.34 19.49 35.34 19.48 35.34C16.8 35.34 14.61 33.17 14.61 30.5C14.61 27.84 16.8 25.66 19.49 25.66C22.18 25.66 24.37 27.84 24.37 30.5Z"
                  fill="url(#paint_linear_1_2014_0)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Hyper Personalized Coaching
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              One-on-one instruction tailored to your learning style
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">HighPaidJobs</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">Others</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gray-700 rounded p-2 text-xs text-center">
              Dedicated mentor throughout your journey
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <svg
                width="48.513672"
                height="50.000000"
                viewBox="0 0 48.5137 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-9 md:h-auto w-9 md:w-auto"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <linearGradient
                    x1="0.000000"
                    y1="25.000000"
                    x2="48.513863"
                    y2="25.000000"
                    id="paint_linear_1_2042_0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00F2FE"></stop>
                    <stop offset="0.020800" stop-color="#03EFFE"></stop>
                    <stop offset="0.293100" stop-color="#24D2FE"></stop>
                    <stop offset="0.553800" stop-color="#3CBDFE"></stop>
                    <stop offset="0.795600" stop-color="#4AB0FE"></stop>
                    <stop offset="1.000000" stop-color="#4FACFE"></stop>
                  </linearGradient>
                </defs>
                <path
                  id="Vector"
                  d="M16.26 35.24C17.03 34.95 17.91 35.18 18.44 35.8C18.98 36.43 19.04 37.36 18.62 38.07C18.21 38.76 17.39 39.13 16.6 38.99C15.82 38.85 15.19 38.22 15.03 37.45C14.85 36.52 15.38 35.57 16.26 35.24ZM44.6 36.32L44.6 35.88C44.6 28.66 38.73 22.78 31.51 22.78L31.46 22.78C29.43 22.78 27.45 23.26 25.67 24.13L26.89 24.13C30.76 24.13 33.9 27.28 33.9 31.14L33.9 46.09L44.6 46.09C44.6 45.01 45.48 44.14 46.56 44.14C47.63 44.14 48.51 45.01 48.51 46.09L48.51 48.04C48.51 49.12 47.63 50 46.56 50L1.95 50C0.87 50 0 49.12 0 48.04L0 31.14C0 27.28 3.14 24.13 7 24.13L19.17 24.13C20.69 22.55 22.49 21.28 24.45 20.39C21.75 18.3 20.01 15.04 20.01 11.39C20.01 5.11 25.16 0 31.49 0C37.82 0 42.97 5.11 42.97 11.39C42.97 15.04 41.22 18.3 38.52 20.39C44.41 23.06 48.51 29 48.51 35.88L48.51 36.32C48.51 37.4 47.63 38.28 46.56 38.28C45.48 38.28 44.6 37.4 44.6 36.32ZM26.89 28.04L7 28.04C5.29 28.04 3.9 29.43 3.9 31.14L3.9 46.09L30 46.09L30 31.14C30 29.43 28.6 28.04 26.89 28.04ZM23.91 11.39C23.91 15.52 27.31 18.88 31.49 18.88C35.66 18.88 39.06 15.52 39.06 11.39C39.06 7.26 35.66 3.9 31.49 3.9C27.31 3.9 23.91 7.26 23.91 11.39Z"
                  fill="url(#paint_linear_1_2042_0)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interview Support</h3>
            <p className="text-gray-400 text-sm mb-4">
              Expert guidance during the entire interview process
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">HighPaidJobs</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">Others</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gray-700 rounded p-2 text-xs text-center">
              We join your interviews to help you succeed
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <svg
                width="48.513672"
                height="50.000000"
                viewBox="0 0 48.5137 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-9 md:h-auto w-9 md:w-auto"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <linearGradient
                    x1="0.000000"
                    y1="25.000000"
                    x2="48.513863"
                    y2="25.000000"
                    id="paint_linear_1_2042_0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00F2FE"></stop>
                    <stop offset="0.020800" stop-color="#03EFFE"></stop>
                    <stop offset="0.293100" stop-color="#24D2FE"></stop>
                    <stop offset="0.553800" stop-color="#3CBDFE"></stop>
                    <stop offset="0.795600" stop-color="#4AB0FE"></stop>
                    <stop offset="1.000000" stop-color="#4FACFE"></stop>
                  </linearGradient>
                </defs>
                <path
                  id="Vector"
                  d="M16.26 35.24C17.03 34.95 17.91 35.18 18.44 35.8C18.98 36.43 19.04 37.36 18.62 38.07C18.21 38.76 17.39 39.13 16.6 38.99C15.82 38.85 15.19 38.22 15.03 37.45C14.85 36.52 15.38 35.57 16.26 35.24ZM44.6 36.32L44.6 35.88C44.6 28.66 38.73 22.78 31.51 22.78L31.46 22.78C29.43 22.78 27.45 23.26 25.67 24.13L26.89 24.13C30.76 24.13 33.9 27.28 33.9 31.14L33.9 46.09L44.6 46.09C44.6 45.01 45.48 44.14 46.56 44.14C47.63 44.14 48.51 45.01 48.51 46.09L48.51 48.04C48.51 49.12 47.63 50 46.56 50L1.95 50C0.87 50 0 49.12 0 48.04L0 31.14C0 27.28 3.14 24.13 7 24.13L19.17 24.13C20.69 22.55 22.49 21.28 24.45 20.39C21.75 18.3 20.01 15.04 20.01 11.39C20.01 5.11 25.16 0 31.49 0C37.82 0 42.97 5.11 42.97 11.39C42.97 15.04 41.22 18.3 38.52 20.39C44.41 23.06 48.51 29 48.51 35.88L48.51 36.32C48.51 37.4 47.63 38.28 46.56 38.28C45.48 38.28 44.6 37.4 44.6 36.32ZM26.89 28.04L7 28.04C5.29 28.04 3.9 29.43 3.9 31.14L3.9 46.09L30 46.09L30 31.14C30 29.43 28.6 28.04 26.89 28.04ZM23.91 11.39C23.91 15.52 27.31 18.88 31.49 18.88C35.66 18.88 39.06 15.52 39.06 11.39C39.06 7.26 35.66 3.9 31.49 3.9C27.31 3.9 23.91 7.26 23.91 11.39Z"
                  fill="url(#paint_linear_1_2042_0)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Post-Hire Support</h3>
            <p className="text-gray-400 text-sm mb-4">
              Continued assistance after you land your job
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">HighPaidJobs</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">Others</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gray-700 rounded p-2 text-xs text-center">
              Full support during probation period to help your job sustain
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <svg
                width="43.522949"
                height="50.000000"
                viewBox="0 0 43.5229 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-9 md:h-auto w-9 md:w-auto"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <linearGradient
                    x1="-0.000098"
                    y1="25.000000"
                    x2="43.522755"
                    y2="25.000000"
                    id="paint_linear_1_2069_0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00F2FE"></stop>
                    <stop offset="0.020800" stop-color="#03EFFE"></stop>
                    <stop offset="0.293100" stop-color="#24D2FE"></stop>
                    <stop offset="0.553800" stop-color="#3CBDFE"></stop>
                    <stop offset="0.795600" stop-color="#4AB0FE"></stop>
                    <stop offset="1.000000" stop-color="#4FACFE"></stop>
                  </linearGradient>
                </defs>
                <path
                  id="Vector"
                  d="M19.44 20.15C19.49 19.79 19.23 19.12 18.31 18.8C16.91 18.31 15.82 17.89 15.32 17.65C13.58 16.83 12.58 15.19 12.72 13.37C12.85 11.51 14.08 9.92 15.78 9.38C15.95 8.46 16.75 7.77 17.7 7.77C18.62 7.77 19.4 8.41 19.6 9.26C20.75 9.6 21.65 10.26 22.18 11.02C22.8 11.9 22.59 13.12 21.71 13.74C20.83 14.36 19.61 14.15 18.99 13.26C18.86 13.09 18.16 12.74 16.98 13.09C16.82 13.14 16.63 13.39 16.61 13.65C16.6 13.76 16.59 13.93 16.98 14.12C17.21 14.22 18.02 14.56 19.61 15.12C22.1 16 23.62 18.27 23.32 20.64C23.07 22.61 21.62 24.08 19.54 24.56C19.27 25.32 18.55 25.86 17.7 25.86C16.81 25.86 16.06 25.25 15.83 24.43C14.7 24.11 13.6 23.52 12.81 22.53C12.13 21.69 12.26 20.46 13.1 19.79C13.94 19.11 15.17 19.24 15.85 20.08C16.31 20.66 17.45 20.89 18.29 20.82C18.61 20.79 19.38 20.67 19.44 20.15ZM43.52 32.03L43.52 40.32C43.52 44.02 41.18 47.35 37.71 48.61L34.45 49.8C34.23 49.88 34.01 49.91 33.78 49.91C33.56 49.91 33.33 49.88 33.11 49.8L31.41 49.18C30.33 49.71 29.14 50 27.92 50L7.81 50C3.5 50 0 46.49 0 42.18L0 7.81C0 3.5 3.5 0 7.81 0L27.92 0C32.23 0 35.74 3.5 35.74 7.81L35.74 19.56C35.74 20.64 34.86 21.51 33.78 21.51C32.7 21.51 31.83 20.64 31.83 19.56L31.83 7.81C31.83 5.65 30.08 3.9 27.92 3.9L7.81 3.9C5.65 3.9 3.9 5.65 3.9 7.81L3.9 42.18C3.9 44.34 5.65 46.09 7.81 46.09L26.2 46.09C25.18 44.91 24.48 43.47 24.19 41.91L9.92 41.91C8.85 41.91 7.97 41.03 7.97 39.96C7.97 38.88 8.85 38 9.92 38L24.05 38L24.05 33.98L9.92 33.98C8.85 33.98 7.97 33.11 7.97 32.03C7.97 30.95 8.85 30.07 9.92 30.07L26 30.07C26.01 30.07 26.2 30.08 26.26 30.09C27.7 30.26 29.14 29.79 30.2 28.79C32.21 26.9 35.36 26.9 37.37 28.79C38.43 29.79 39.88 30.26 41.33 30.09C41.88 30.02 42.44 30.19 42.86 30.56C43.28 30.93 43.52 31.47 43.52 32.03ZM39.61 33.96C37.79 33.73 36.07 32.93 34.69 31.64C34.18 31.16 33.38 31.16 32.87 31.64C31.5 32.93 29.78 33.73 27.95 33.96L27.95 40.32C27.95 42.38 29.25 44.24 31.19 44.94L33.78 45.88L36.37 44.94C38.31 44.24 39.61 42.38 39.61 40.32L39.61 33.96Z"
                  fill="url(#paint_linear_1_2069_0)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Decided Salary Renegotiation
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Expert techniques to maximize your compensation
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">HighPaidJobs</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">Others</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gray-700 rounded p-2 text-xs text-center">
              Average 15-10% increase in offers
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shield h-12 w-12 text-cyan-400"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              100% Money-Back Guarantee
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              15 day money back guarantee, a risk-free investment
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">HighPaidJobs</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="bg-gray-900 rounded flex items-center justify-center py-2 px-4">
                <span className="mr-2">Others</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gray-700 rounded p-2 text-xs text-center">
              15-day unconditional guarantee
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">
            Ready to experience the HighPaidJobs difference?
          </h3>
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Book Free Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
