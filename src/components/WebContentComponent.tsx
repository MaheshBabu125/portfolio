import React, { useState, useEffect } from 'react';

type WebContentComponentProps = {
  onDetectDevice?: (isMobile: boolean) => void;
};

const WebContentComponent = ({ onDetectDevice }: WebContentComponentProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const mobile = mobileRegex.test(userAgent);
      setIsMobile(mobile);
      onDetectDevice?.(mobile); // Call the callback with the detected value
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [onDetectDevice]);

  const RenderContent = () => {
    if (isMobile) {
      return (
        <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
          <h3 className="text-lg font-bold text-blue-800 mb-2">Mobile Web View</h3>
          <p className="text-blue-700">
            This content is being displayed in a specialized mobile web view.
            It may have different styling and functionality optimized for mobile devices.
          </p>
          <div className="mt-4 bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-700">
              On a real mobile application using React Native, this would be rendered in a WebView component.
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return isMobile ? (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <RenderContent />
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Current device detected: <span className="font-semibold">Mobile</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            User agent detection is being used to determine your device type.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default WebContentComponent;
