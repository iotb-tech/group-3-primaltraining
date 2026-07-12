import Image from "next/image";

const JoinCommunity = () => {
  return (
    <section className="w-full max-w-[1484px] mx-auto min-h-[752px] md:min-h-[470px] lg:min-h-[600px]">
      <h2 className="font-anek font-extrabold text-black text-[46px] md:pt-10 md:text-[70px] lg:text-[100px] leading-none tracking-tighter p-4 mx-auto">
        JOIN THE<span className="text-[#808CFD] leading-tight"> COMMUNITY</span>
      </h2>

      {/* define a 5x3 grid */}
      <div className="grid grid-cols-1 grid-rows-[1.84fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-[1.35fr_1fr_1fr_1fr_1fr] lg:h-[960px] md:h-[470px]">
        {/* 1st div row 1 column 1 */}
        <div className="bg-[#E9ECFF] flex items-center border px-4 border-black border-t-2 w-full min-h-[122px] md:h-full">
          <h2 className="font-anek font-extrabold uppercase text-[45px] leading-none">
            DISCOVER YOUR POTENTIAL
          </h2>
        </div>

        {/* 2nd div row 2 column 1 */}
        <div className="bg-[#E9ECFF] border border-black flex flex-col items-start justify-center p-4 min-h-[122px] md:h-full">
          <h2 className="font-anek font-extrabold uppercase mb-2 text-[25px] leading-none">
            Expert Coaching
          </h2>

          <p className="font-geist text-[17px]">
            Trainers who are passionate about your progress.
          </p>
        </div>

        {/* 3rd div row 3 column 1 */}
        <div className="bg-[#E9ECFF] border border-black flex flex-col items-start justify-center p-4 min-h-[122px] md:h-full">
          <h2 className="font-anek font-extrabold uppercase mb-2 text-[25px] leading-none">
            Results-Driven Programs
          </h2>

          <p className="font-geist text-[17px]">
            Workouts that deliver tangible, measurable results.
          </p>
        </div>

        {/* 4th div row 4 column 1 */}
        <div className="bg-[#E9ECFF] border border-black border-b-2 flex flex-col items-start justify-center p-4 min-h-[122px] md:h-full">
          <h2 className="font-anek font-extrabold uppercase mb-2 text-[25px] leading-none">
            A Supportive Tribe
          </h2>

          <p className="font-geist text-[17px]">
            A community that pushes you to be your best.
          </p>
        </div>

        {/* 5th div row 5 column 1 */}
        <div className="bg-[#E9ECFF] flex items-center p-4 min-h-[122px] md:h-full">
          <a href="#view-classes">
            <button className="font-geist-mono px-4 py-2 rounded-lg font-medium uppercase cursor-pointer hover:bg-black hover:text-white">
              View classes
            </button>
          </a>
        </div>

        {/* 6th div row 2 columns 2 & 3 (spans 5 rows and 2 columns) */}
        <div className="relative hidden md:block md:col-start-2 md:row-start-1 md:row-span-5 md:h-full lg:col-span-2 lg:col-start-2">
          <Image
            src="/images/sven-mieke.jpg"
            alt="Sven Mieke"
            fill
            sizes="(max-width: 1024px) 50vw, 66vw"
            className="object-cover"
          />
        </div>

        {/* 6th div row 1 & 2 column 1 (1st on mobile) */}
        <div className="relative min-h-[225px] row-start-1 md:hidden">
          <Image
            src="/images/sven-mieke.jpg"
            alt="Sven Mieke"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
