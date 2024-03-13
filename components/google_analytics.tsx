// Inside your main component or any other suitable component
import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (key: string, arg1: string, arg2?: any) => void;
    dataLayer?: any[];
  }
}

const GoogleAnalytics: React.FC<{ trackingId: string }> = ({ trackingId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  useEffect(() => {
    if (!window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag('js', new Date().toISOString()); // Convert Date object to ISO string
    window.gtag('config', trackingId);
  }, [trackingId]);

  return null;
};

export default GoogleAnalytics;
