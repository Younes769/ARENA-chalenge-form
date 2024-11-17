import React, { useState } from "react";
import logo from "./assets/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [hasTeam, setHasTeam] = useState(false);
  const [needsTransport, setNeedsTransport] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      // Create a URLSearchParams object
      const params = new URLSearchParams();
      
      // Add each field individually
      for (const [key, value] of formData.entries()) {
        if (key.startsWith('teamMember') && !value) continue;
        params.append(key, value);
      }

      await fetch('https://send.pageclip.co/2Vcs3gyKFYmUV8zVKT4CppKxGn18NVdb/Arena_form', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      });

      setShowForm(false);
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showForm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-tl from-indigo-900 via-blue-800 to-blue-900">
        <img src={logo} alt="Arena Logo" className="w-32 h-32 mb-4" />
        <div className="backdrop-blur-lg bg-black/40 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800/50 text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white/90">Registration Successful!</h2>
          <p className="text-green-400 mt-2">Thank you for joining Arena.</p>
          <p className="text-gray-400 text-sm mt-2">We'll be in touch with you soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-tl from-indigo-900 via-blue-800 to-blue-900">
      <img src={logo} alt="Arena Logo" className="w-32 h-32 mb-4" />
      <h1 className="text-3xl font-bold mb-6 text-white/90">Registration</h1>
      
      <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-black/40 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800/50">
        {/* Full Name */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">Full Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">Email</span>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500"
            />
            <MdOutlineMailOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </label>

        {/* Discord */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">Discord Username</span>
          <input
            type="text"
            name="discord"
            required
            placeholder="username#0000"
            className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500"
          />
        </label>

        {/* University Year */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">University Year</span>
          <select
            name="universityYear"
            required
            className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
        </label>

        {/* NIT Transport */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">Interested in NIT Transport?</span>
          <select
            name="needsTransport"
            onChange={(e) => setNeedsTransport(e.target.value === "yes")}
            required
            className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Location field - appears when transport is needed */}
        {needsTransport && (
          <label className="block mb-4">
            <span className="text-white/90 mb-1 block">Your Location</span>
            <input
              type="text"
              name="location"
              required
              placeholder="Enter your location"
              className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500"
            />
          </label>
        )}

        {/* Programming Languages */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">Preferred Programming Languages</span>
          <input
            type="text"
            name="languages"
            placeholder="e.g., Python, JavaScript"
            required
            className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500"
          />
        </label>

        {/* Team Selection */}
        <label className="block mb-4">
          <span className="text-white/90 mb-1 block">Do you have a team?</span>
          <select
            onChange={(e) => setHasTeam(e.target.value === "yes")}
            required
            className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {/* Team fields */}
        {hasTeam && (
          <>
            <label className="block mb-4">
              <span className="text-white/90 mb-1 block">Team Name</span>
              <input
                type="text"
                name="teamName"
                required
                className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500"
              />
            </label>

            <label className="block mb-4">
              <span className="text-white/90 mb-1 block">Additional Team Members (up to 3)</span>
            </label>
            {[1, 2, 3].map((member) => (
              <input
                key={member}
                type="text"
                name={`teamMember${member}`}
                placeholder={`Team Member ${member}`}
                className="mt-1 p-2 w-full border bg-gray-950/50 border-gray-800 rounded-md text-white/90 focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500 mb-4"
              />
            ))}
          </>
        )}

        {/* Terms checkbox */}
        <label className="block mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              required
              className="mr-2 rounded border-gray-800 bg-gray-950/50"
            />
            <span className="text-white/90">I agree to the terms and conditions</span>
          </div>
        </label>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-3 rounded-md hover:from-blue-800 hover:to-indigo-900 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2" />
              Submitting...
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}

export default App;
