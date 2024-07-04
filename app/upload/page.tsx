"use client";

import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicId, setPublidId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="London" />
      )}
      <CldUploadWidget
        uploadPreset="sadwba9o"
        options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublidId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
export default UploadPage;
