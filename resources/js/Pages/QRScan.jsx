import React, { useState } from 'react';
import QRScanner from './QRScanner';

function QRScan() {
  const [scanResult, setScanResult] = useState(null);

  const handleScanSuccess = (decodedText, decodedResult) => {
    console.log(`Scan successful: ${decodedText}`);
    setScanResult(decodedText);
    // Optionally, stop the scanner after a successful scan
    // html5QrcodeScanner.clear(); // If you have access to the scanner instance
  };

  const handleScanFailure = (error) => {
    console.warn(`Scan error: ${error}`);
  };

  return (
    <div className="App">
      <h1>QR Code Scanner</h1>
      {scanResult ? (
        <div>
          <p>Scanned QR Code: {scanResult}</p>
          <button onClick={() => setScanResult(null)}>Scan Again</button>
        </div>
      ) : (
        <QRScanner
          onScanSuccess={handleScanSuccess}
          onScanFailure={handleScanFailure}
        />
      )}
    </div>
  );
}

export default QRScan;