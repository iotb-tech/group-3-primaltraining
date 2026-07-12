import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full max-w-[1484px] mx-auto">
      <div>
        <h1 className="font-anek font-extrabold uppercase text-black text-[40px] md:text-[68px] lg:text-[100px] leading-none tracking-tighter px-4 py-2">
          TRAIN HARD.<span className="text-[#808CFD]"> LIVE BETTER</span>
        </h1>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:h-[960px] md:h-[600px] pt-6">
        {/* 1st div row 1 (spans 2 columns) */}
        <div className="relative bg-gray-200 w-full min-h-[225px] md:min-h-[300px] lg:min-h-[480px] md:h-full md:col-span-2">
          <Image
            src="/images/meghan-holmes.jpg"
            alt="Meghan Holmes"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        {/* 2nd div row 1 (takes up the last column) */}
        <div className="bg-white flex flex-col justify-between p-6 border border-black min-h-[300px] md:min-h-[300px] lg:min-h-[480px]">
          <h2 className="font-anek font-extrabold text-[50px] leading-none tracking-tighter">
            FOR THE COMMITTED
          </h2>

          <div className="space-y-4 pb-8">
            <p className="font-geist text-[19px]">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you&apos;re building muscle or breaking PRs,
              we help you push past limits.
            </p>
            <a href="#about-us">
              <button className="font-geist-mono px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-black hover:text-white">
                ABOUT US
              </button>
            </a>
          </div>
        </div>

        {/* 5th div (3rd on mobile) */}
        <div className="relative min-h-[300px] md:hidden">
          <Image
            src="/images/spencer-davis.jpg"
            alt="Spencer Davis"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 3rd div row 2 (takes one column) */}
        <div className="bg-white p-6 pb-16 flex flex-col justify-between border border-black md:border-b-2 min-h-[151px] md:min-h-[300px] lg:min-h-[480px]">
          <h2 className="font-anek font-extrabold text-[50px] leading-none tracking-tighter">
            GUIDED BY EXPERTS
          </h2>
          <p className="text-[19px]">
            We believe in creating a positive environment where you can thrive.
            We&apos;re here to help you achieve your goals and unlock your full
            potential.
          </p>
        </div>

        {/* 4th div */}
        <div className="bg-white p-6 pb-12 flex flex-col justify-between border border-black border-b-2 min-h-[171px] md:min-h-[300px] lg:min-h-[480px]">
          <h2 className="font-anek font-extrabold text-[50px] leading-none tracking-tighter">
            DYNAMIC OPEN GYM
          </h2>
          <p className="text-[19px]">
            Our facility is the optimal environment for strength training and
            performance, fully equipped with top-of-the-line tools, ample
            training areas, and a focus on functional movement.
          </p>
        </div>

        {/* 5th div */}
        <div className="relative hidden md:block min-h-[480px] md:min-h-[300px] lg:min-h-[480px] md:h-full">
          <Image
            src="/images/spencer-davis.jpg"
            alt="Spencer Davis"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
