import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid"; // Add this for unique filenames

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);

  const onError = (err) => {
    console.error("Upload Error:", err);
    toast.error("Image upload failed! Please try again.");
  };

  const onSuccess = (res) => {
    console.log("Upload Success:", res);
    setData(res);
  };

  const onUploadProgress = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    console.log("Upload Progress:", percentage);
    setProgress(percentage);
  };

  // Generate a unique filename with UUID
  const uniqueFileName = `image_${uuidv4()}`;

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName={false}  // We're manually setting a unique name
        fileName={uniqueFileName}  // Apply the unique filename
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
