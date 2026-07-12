import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full max-w-[1484px] mx-auto min-h-[510px] md:min-h-[480px] bg-[#808CFD] border border-t-0 border-b border-black py-6 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="font-geist uppercase font-normal text-[17px] text-black tracking-tighter">
          WHAT WE BELIEVE IN
        </p>

        <h1 className="font-anek font-extrabold text-center text-black text-[57px] px-6 leading-none tracking-tighter p-4 mx-auto">
          JOIN THE PRIMAL TRIBE TODAY!
        </h1>
      </div>

      <Link href="/reserve-your-spot">
        <button className="font-geist-mono bg-white px-4 py-2 rounded-md text-[17px] text-black cursor-pointer hover:bg-black hover:text-white transition">
          RESERVE YOUR SPOT
        </button>
      </Link>
    </section>
  );
};

export default CTA;
