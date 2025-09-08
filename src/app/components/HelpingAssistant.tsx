import React from "react";
import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });

function HelpingAssistant() {
  return (
    <div className="mx-auto bg-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3
          className={`${anton.className} my-16 sm:my-20 md:my-28 text-gray-800 text-2xl sm:text-3xl md:text-5xl leading-tight`}
        >
          Discover how{" "}
          <span className="text-blue-500">AI Health Assistant</span>
          <br /> can support your health journey today.
        </h3>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 lg:space-y-32">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              {/* <div className="w-56 sm:w-64 md:w-72 h-auto flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image src="/1.jpg" alt="Health Support" className="w-full h-auto object-contain" />
              </div> */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/1.jpg"
                  alt="Health Support"
                  className="w-full h-full object-contain"
                  width={288} // md:w-72 = 288px
                  height={288} // md:h-72 = 288px
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl mb-3 leading-snug font-light">
                Get instant answers
                <br />
                <span className="text-gray-700">to health questions</span>
              </h3>
              <div className="h-1.5 sm:h-2 w-40 sm:w-56 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Skip the endless <b>research</b>. Ask your{" "}
                <b>AI Health Assistant</b> anything and receive clear,{" "}
                <b>reliable</b>, and <b>fast answers</b> — <b>24/7</b>.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              {/* <div className="w-56 sm:w-64 md:w-72 h-auto flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image src="/2.png" alt="Medical History" className="w-full h-auto object-contain" />
              </div> */}
              <div className="w-56 sm:w-64 md:w-72 aspect-square flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/2.png"
                  alt="Medical History"
                  className="w-full h-full object-contain"
                  width={288}
                  height={288}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl mb-3 leading-snug font-light">
                Share your medical history
                <br />
                and get smarter advice
              </h3>
              <div className="h-1.5 sm:h-2 w-40 sm:w-56 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Your <b>assistant</b> adapts to you. The more it knows your
                history, the <b>better and safer</b> its <b>recommendations</b>{" "}
                become.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              {/* <div className="w-56 sm:w-64 md:w-72 h-auto flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/3.png"
                  alt="Lab Reports"
                  className="w-full h-auto object-contain"
                />
              </div> */}
                <div className="w-56 sm:w-64 md:w-72 aspect-square flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/3.png"
                  alt="Lab Report"
                  className="w-full h-full object-contain"
                  width={288}
                  height={288}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl mb-3 leading-snug font-light">
                Upload lab reports
                <br />
                for instant insights
              </h3>
              <div className="h-1.5 sm:h-2 w-40 sm:w-56 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                No more guessing <b>complicated results</b>. Let the assistant{" "}
                <b>highlight</b> what matters most in your <b>reports</b> within{" "}
                <b>seconds</b>.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              {/* <div className="w-56 sm:w-64 md:w-72 h-auto flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/4.png"
                  alt="Photo Analysis"
                  className="w-full h-auto object-contain"
                />
              </div> */}
                <div className="w-56 sm:w-64 md:w-72 aspect-square flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/4.png"
                  alt="Photo Analysis"
                  className="w-full h-full object-contain"
                  width={288}
                  height={288}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl mb-3 leading-snug font-light">
                Send photos
                <br />
                for quick analysis
              </h3>
              <div className="h-1.5 sm:h-2 w-40 sm:w-56 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                From <b>skin rashes</b> to <b>prescriptions</b> —{" "}
                <b>upload images</b> and let the <b>AI assist</b> you with
                context-aware <b>suggestions</b>.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              {/* <div className="w-56 sm:w-64 md:w-72 h-auto flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/5.png"
                  alt="Multilingual Support"
                  className="w-full h-auto object-contain"
                />
              </div> */}
                <div className="w-56 sm:w-64 md:w-72 aspect-square flex items-center justify-center rounded-2xl border-4 border-gray-800 shadow-2xl bg-gray-100 p-4">
                <Image
                  src="/5.png"
                  alt="Multilingual Support"
                  className="w-full h-full object-contain"
                  width={288}
                  height={288}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl mb-3 leading-snug font-light">
                Talk in your
                <br /> own language
              </h3>
              <div className="h-1.5 sm:h-2 w-40 sm:w-56 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto md:mx-0 mb-4"></div>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <b>English</b>, <b>Urdu</b>, or others — your{" "}
                <b>health assistant</b> <b>speaks</b> the <b>language</b>{" "}
                you&apos;re most <b>comfortable</b> with.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelpingAssistant;
