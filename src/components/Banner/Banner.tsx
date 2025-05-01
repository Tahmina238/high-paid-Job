import Link from "next/link";

export default function Banner() {
  return (
    <main className=" bg-primary text-white">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-blue-700/50 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
                <p className="text-lg font-medium">
                  99.99% GUARANTEED to Reach the Top 1%
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold ">
                Get your Six-Figure job back in{" "}
                <span className="text-yellow-400 relative">
                  8-16 Weeks
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
                </span>{" "}
                with our proven techniques.
              </h1>

              <p className="text-xl opacity-90 mt-4">
                Get access actively hiring 20+ premium recruiters today
                surrounding your location.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#book"
                className="bg-yellow-500 hover:bg-yellow-400 transition-colors text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center"
              >
                Book Free Consultation
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="#webinar"
                className="bg-blue-700/50 backdrop-blur-sm hover:bg-blue-700/70 transition-colors border border-blue-500/30 font-semibold px-8 py-4 rounded-full flex items-center justify-center"
              >
                Join Next Webinar
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto max-w-md">
            <div className=" w-full rounded-lg overflow-hidden ">
              <iframe
                src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&autoplay=1"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                style={{ aspectRatio: "9/16" }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

//           <div className="aspect-[3/4]">

{
  /* <iframe
  src={"https://player.vimeo.com/video/1065693603?h=0c54fe674c"}
  title={`${name} testimonial video`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="absolute inset-0 w-full h-full"
></iframe>; */
}
