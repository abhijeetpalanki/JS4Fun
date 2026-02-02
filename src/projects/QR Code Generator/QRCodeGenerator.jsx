import { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QRCode from "./qr-code.svg";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState(null);
  const [url, setUrl] = useState("");
  const spinnerRef = useRef(null);

  const hideSpinner = () => {
    spinnerRef.current.style.display = "none";
  };

  const onGenerateSubmit = (e) => {
    e.preventDefault();

    resetUI();
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQrCode(url);
    }, 1000);
  };

  const resetUI = () => {
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    hideSpinner();
  }, []);

  const generateQrCode = (url) => {
    const qrcode = <QRCodeCanvas id="qrCode" value={url} size={300} />;
    setQrCode(qrcode);
  };

  const showSpinner = () => {
    spinnerRef.current.style.display = "block";
  };

  return (
    <div className="h-screen overflow-x-hidden text-black">
      <main>
        <div className="flex flex-col-reverse justify-center p-10 m-auto mt-10 align-center md:max-w-4xl md:flex-row">
          <div className="w-full mr-24 md:w-2/3">
            <h1 className="mb-5 text-3xl font-bold md:text-4xl">
              QR Code Generator
            </h1>
            <p className="mb-4">
              QR codes allow smartphone users to access your website simply and
              quickly.
            </p>
            <p>
              Enter your URL below to generate a QR code and download the image.
            </p>
            <form className="mt-4" onSubmit={onGenerateSubmit}>
              <input
                value={url}
                onChange={qrCodeEncoder}
                placeholder="Enter a URL"
                type="url"
                className="w-full p-3 mb-5 mr-2 text-gray-900 border-2 border-gray-200 rounded focus:outline-none"
              />
              <button
                className={`w-full px-4 py-3 mt-5 text-black bg-white rounded ${
                  url && "hover:bg-black hover:text-white"
                }`}
                type="submit"
                disabled={!url}
              >
                Generate QR Code
              </button>
            </form>
          </div>
          <div className="self-center w-full md:w-1/3">
            <img src={QRCode} alt="" className="w-1/2 m-auto mb-10 md:w-full" />
          </div>
        </div>

        {/* Generated QR Code */}
        <div className="flex flex-col justify-center max-w-5xl m-auto my-20 text-center align-center">
          {/* Spinner */}
          <div ref={spinnerRef} className="hidden" id="spinner" role="status">
            <svg
              className="inline w-24 h-24 mr-2 text-gray-200 animate-spin fill-pink-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>

          {/* QR Code Output */}
          <div className="flex flex-col items-center justify-center m-auto">
            {qrCode && (
              <p className="mb-4">
                Right click to "Save image as..." and save it for further use.
              </p>
            )}
            {qrCode}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QRCodeGenerator;
