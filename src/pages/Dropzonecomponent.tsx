import React from 'react';
import { UploadCloud } from 'lucide-react';

const DropZoneComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh] bg-[#f6faff]">
      <div className="w-[90%] md:w-[60%] border-2 border-dashed border-blue-300 rounded-xl bg-[#f9fbff] p-10 text-center space-y-5 shadow-sm">
        <UploadCloud className="mx-auto text-blue-500" size={48} />
        <h2 className="text-xl font-semibold text-gray-800">Drop your document here</h2>
        <p className="text-gray-600">Supports PDF, TXT, and DOCX files up to 10MB</p>

        <div className="flex justify-center space-x-4 pt-2">
          <label htmlFor="file-upload" className="cursor-pointer inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium">
            <UploadCloud className="mr-2" size={18} />
            Choose File
            <input id="file-upload" type="file" className="hidden" />
          </label>
          <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Paste Text Instead
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
