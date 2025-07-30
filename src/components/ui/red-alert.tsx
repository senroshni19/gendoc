import React, { Children } from 'react';
import { AlertTriangle } from 'lucide-react';



const RedAlert = ({children}) => {
  return (
    <div className="relative max-w-md mt-6 ml-6 mb-7">
      {/* Warning icon with its own border that merges with main border */}
      <div className="absolute -top-3 left-4 bg-red-50 border-2 border-red-500 rounded-full p-2">
        <AlertTriangle className="text-red-500" size={16} />
      </div>
      
      {/* Alert container */}
      <div className="bg-white rounded-lg p-4 pt-6">
        {/* Main border that merges with the icon's border */}
        <div className="text-red-700">
          <p className="font-medium text-sm">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedAlert;