import React, { useState } from "react";

const CTASection = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-24" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Let’s Work Together
        </h2>
        <p className="text-gray-600 mt-2">
          Reach out to hire me or leave a comment below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Hire Me Form */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-4 text-green-600 uppercase">
            Hire Me
          </h3>
          <form className="space-y-8 flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input bg-[#e5e7eb] focus:outline-0 p-4 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input bg-[#e5e7eb] focus:outline-0 p-4 rounded"
            />
            <textarea
              placeholder="Project Details"
              rows="4"
              className="form-input bg-[#e5e7eb] focus:outline-0 p-4 rounded"
            />
            <button
              type="submit"
              className="form-button bg-green-600 hover:bg-green-700 px-4 py-2 shadow-sm rounded text-white"
            >
              Send Request
            </button>
          </form>
        </div>

        {/* Comment Form with Image Upload */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-orange-500 font-bold">
            Leave a Comment
          </h3>
          <form className="space-y-4 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input bg-[#e5e7eb] focus:outline-0 rounded p-2"
            />
            <input
              type="text"
              placeholder="Role / Company"
              className="form-input bg-[#e5e7eb] focus:outline-0 rounded p-2"
            />
            <textarea
              placeholder="Your Comment"
              rows="4"
              className="form-input bg-[#e5e7eb] focus:outline-0 rounded p-2"
            />

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Looking sharp? upload image. 😁
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-600 file:bg-orange-100 file:border-none file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
              />
              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="mt-3 w-20 h-20 object-cover rounded-full border"
                />
              )}
            </div>

            <button
              type="submit"
              className="form-button bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded shadow-sm text-white"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
