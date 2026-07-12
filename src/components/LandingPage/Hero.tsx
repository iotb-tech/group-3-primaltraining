import React from 'react'

    const Hero = () => {
  return (
    <section className="bg-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">
          TRAIN HARD. <span className="text-blue-600">LIVE BETTER</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src="/gym1.jpeg" alt="Training" className="w-full h-auto object-cover" />
          </div>
          <div className="bg-black text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">FOR THE COMMITTED</h2>
            <p className="text-gray-300 mb-6">
              Train like an athlete with top-tier equipment and expert programming. 
              Whether you're building muscle or breaking PRs, we help you push past limits.
            </p>
            <button className="text-sm underline font-bold uppercase self-start">About Us</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-3">GUIDED BY EXPERTS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe in creating a positive environment where you can thrive. 
              We're here to help you achieve your goals and unlock your full potential.
            </p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-3">DYNAMIC OPEN GYM</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our facility is the optimal environment for strength training and performance, 
              fully equipped with top-of-the-line racks, ample training areas, and a focus on functional movement.
            </p>
          </div>
          <div className="p-4">
            <img src="/gym5.jpeg" alt="gym rope" className="w-full h-48 object-cover" />
          </div>
        </div>
      
    </section>
  );
};

export default Hero;