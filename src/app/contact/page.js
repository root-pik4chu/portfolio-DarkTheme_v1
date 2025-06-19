import React from "react";

export default function page() {
  return (
    <div className="h-[100vh] md:h-[90vh] text-white bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">CONTACT</h1>
          <p className="text-sm text-gray-500">
            This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
          </p>
        </div>

        {/* Right Section */}
        <form className="space-y-4">
          <p className="text-sm text-gray-600">Please fill out the form below to contact us. A representative will contact you.</p>

          <div className="flex flex-col">
            <label className="text-xs font-medium">TOPIC*</label>
            <select className="border-b border-gray-300 py-2 text-sm outline-none">
              <option>*Subject</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium">COMPANY</label>
            <input type="text" placeholder="YOUR COMPANY NAME" className="border-b border-gray-300 py-2 text-sm outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium">NAME*</label>
            <input type="text" placeholder="YOUR NAME" className="border-b border-gray-300 py-2 text-sm outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium">PHONE</label>
            <input type="text" placeholder="OPTIONAL" className="border-b border-gray-300 py-2 text-sm outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium">EMAIL*</label>
            <input type="email" placeholder="*YOUR EMAIL ADDRESS" className="border-b border-gray-300 py-2 text-sm outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium">WEBSITE</label>
            <input type="text" placeholder="OPTIONAL" className="border-b border-gray-300 py-2 text-sm outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium">MESSAGE*</label>
            <textarea placeholder="TYPE HERE..." className="border-b border-gray-300 py-2 text-sm outline-none resize-none" rows={4}></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <label className="text-sm">I agree to the <a href="#" className="underline">Privacy Policy</a>.</label>
          </div>

          <button type="submit" className="flex items-center gap-2 text-sm font-semibold mt-4 group">
            <span>SEND</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
