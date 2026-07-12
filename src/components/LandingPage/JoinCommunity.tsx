import React from 'react';

const JoinCommunity = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter">
          JOIN THE <span className="text-blue-600">COMMUNITY</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8">DISCOVER YOUR POTENTIAL</h3>
            <ul className="space-y-8">
              <li>
                <h4 className="font-bold text-lg uppercase">EXPERT COACHING</h4>
                <p className="text-gray-600">Trainers who are passionate about your progress.</p>
              </li>
              <li>
                <h4 className="font-bold text-lg uppercase">RESULTS-DRIVEN PROGRAMS</h4>
                <p className="text-gray-600">Workouts that deliver tangible, measurable results.</p>
              </li>
              <li>
                <h4 className="font-bold text-lg uppercase">A SUPPORTIVE TRIBE</h4>
                <p className="text-gray-600">A community that pushes you to be your best.</p>
              </li>
            </ul>
            <button className="mt-8 text-sm underline font-bold uppercase hover:text-blue-600 transition">
              View Classes
            </button>
          </div>
          <div>
            <img src="/gym2.jpeg" alt="Community Training" className="w-full h-auto shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;