
import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess, onScanFailure }) => {
  const qrcodeRegionId = "html5qr-code-full-region"; // Unique ID for the scanner's HTML element
  const scannerRef = useRef(null);

  useEffect(() => {
    // Create a new scanner instance
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      { fps: 10, qrbox: { width: 125, height: 250 } },
      /* verbose= */ false
    );

    // Store the scanner instance in the ref
    scannerRef.current = html5QrcodeScanner;

    // Render the scanner
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    // Cleanup function to clear the scanner when the component unmounts
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          console.error("Failed to clear html5QrcodeScanner.", error);
        });
      }
    };
  }, [onScanSuccess, onScanFailure]);

  return (
    <div id={qrcodeRegionId} />
  );
};

export default QRScanner;