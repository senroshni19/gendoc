// src/components/FileUpload.jsx
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="bg-[#f4f8ff] min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-10 text-center border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Upload Your Document
        </h2>
        <p className="text-gray-500 mb-8">
          Drag and drop your legal document or paste text directly for instant
          analysis
        </p>

        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 transition-all ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-blue-300"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-gray-600">
            <FaUpload className="text-4xl text-blue-500 mb-4" />
            {fileName ? (
              <p className="font-medium text-gray-700">
                Uploaded: <span className="text-blue-600">{fileName}</span>
              </p>
            ) : (
              <>
                <p className="font-semibold mb-2">Drop your document here</p>
                <p className="text-sm text-gray-500 mb-6">
                  Supports PDF, TXT, and DOCX files up to 10MB
                </p>
              </>
            )}

            <div className="flex gap-3">
              <label
                htmlFor="fileUpload"
                className="bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition"
              >
                Choose File
              </label>
              <input
                id="fileUpload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <button className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100 transition">
                Paste Text Instead
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileUpload;
