import React, { useState } from "react";
import logo from "./assets/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
// import react from './assets/react.svg';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [hasTeam, setHasTeam] = useState(false);

  return (
    
    <div   className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-tl from-indigo-700 via-blue-400 to-blue-900">
      <img src={logo} alt="Arena Logo" className="w-32 h-32 mb-4" />
      <h1 className="text-3xl font-bold mb-6">Registration</h1>
      {submissionSuccess && (
        <p className="text-green-500 mb-4">
          Registration successful! Thank you for joining Arena.
        </p>
      )}
      {submissionSuccess === false && (
        <p className="text-red-500 mb-4">
          There was an error with your submission. Please try again.
        </p>
      )}

      <form
        action="https://send.pageclip.co/vASBJvGlsoZtFuqI7KzeIMP6ga4mdjU1/arena"
        method="POST"
        onSubmit={() => setIsSubmitting(true)}
        target="_blank"
        className="bg- p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <label className="block mb-4">
          Full Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <div className="flex items-center">
        
        <label className="block mb-4">
        
        Email
        
          <input
            type="email"
            name="email"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        </div>
        
        <label className="block mb-4">
          University Year
          <select
            name="universityYear"
            required
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
        </label>

        <label className="block mb-4">
          Preferred Programming Languages
          <input
            type="text"
            name="languages"
            placeholder="e.g., Python, JavaScript"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>

        <label className="block mb-4">
          Do you have a team?
          <select
            onChange={(e) => setHasTeam(e.target.value === "yes")}
            required
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        {hasTeam && (
          <>
            <label className="block mb-4">
              Team Name
              <input
                type="text"
                name="teamName"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>

            <label className="block mb-4">
              Additional Team Members (up to 3)
            </label>
            {[1, 2, 3].map((member) => (
              <input
                type="text"
                name={`teamMember${member}`}
                placeholder={`Team Member ${member}`}
                key={member}
                required={false}
                className="mt-1 p-2 w-full border rounded-md mb-4"
              />
            ))}
          </>
        )}

        <label className="block mb-4">
          <input type="checkbox" name="terms" required className="mr-2" />I
          agree to the terms and conditions
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default App;
