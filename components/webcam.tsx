"use client";
import { dataUrlToFile } from "@/lib/base64ToImage";
import { uploadFile } from "@/lib/getSignedUrl";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

interface IWebCamComponentProps {
  onClose?: () => void;
  onSave?: (url: string) => void;
  takePhotos?: boolean
}
const WebCamComponent = ({ onClose, onSave, takePhotos }: IWebCamComponentProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [img, setImg] = useState<string | null | undefined>(null);

  const capture = useCallback(() => {
    if (!takePhotos) return;
    const imageSrc = webcamRef?.current?.getScreenshot();
    if (!imageSrc) return;
    save(imageSrc);
  }, [webcamRef]);

  const handleCapture = () => {
    if (img) {
      setImg(null);
    } else {
      capture();
    }
  };

  const save = async (imageSrc: string) => {
    if (!imageSrc) return;
    const fileName = `${Date.now() + Math.random()}-webcam-image.png`;
    const file = await dataUrlToFile(imageSrc, fileName);
    const url = await uploadFile(file);
    if (onSave) {
      onSave(url);
    }
  };

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
       capture();
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [capture]);

  const videoConstraints = {
    facingMode: "user",
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center">
      <Webcam
            style={{ width: "100%", height: "100%", objectFit: "cover", visibility: "hidden" }}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            mirrored={true}
            audio={false}
          />
    </div>
  );
};

export { WebCamComponent };
