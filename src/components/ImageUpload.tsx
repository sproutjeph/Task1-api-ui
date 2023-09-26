import React, { useState } from "react";
import { Upload, Image, Card, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface ImageUploadProps {
  onUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  const beforeUpload = (file: File) => {
    // Add any additional validation here if needed (e.g., file size, file type)
    onUpload(file);
    setFileList([file]);
    setPreviewImage(URL.createObjectURL(file)); // Set the preview image URL
    return false; // Prevent Ant Design from uploading the file automatically
  };

  const handleRemove = () => {
    setFileList([]);
    setPreviewImage(undefined);
  };

  return (
    <>
      {previewImage ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
            borderRadius: "20px",
          }}
        >
          <Image
            alt="example"
            src={previewImage}
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "10px",
              backgroundColor: "#FFF",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleRemove}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M9.55672 9.42862L8.54309 8.42749L17.0037 16.7854L25.4644 25.1434"
                stroke="#A80000"
                stroke-width="5"
              />
              <path
                d="M23.5279 10.1184L24.5299 9.10559L16.165 17.5594L8.37691 25.3474"
                stroke="#A80000"
                stroke-width="5"
              />
            </svg>
            <Typography
              style={{
                color: "#A80000",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "-0.09px",
              }}
            >
              Delete & re-upload
            </Typography>
          </div>
        </div>
      ) : (
        <Card
          title="Upload cover image"
          headStyle={{
            backgroundColor: "#D0F7FA",
            color: "#000",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "114%",
            height: "24.98px",
            flexShrink: 0,
          }}
          style={{
            maxWidth: "595px",
            width: "100%",
            height: "408px",
            borderRadius: "20px",
            background: "#FFF",
            boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
          }}
        >
          <div
            className=""
            style={{
              maxWidth: "512px",
              width: "100%",
              height: "210px",
              borderRadius: "5px",
              border: "1px dashed #000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "3px 3px 9px 0px rgba(190, 190, 190, 0.13)",
              marginTop: "50.5px",
              marginLeft: "10px",
              flexShrink: 0,
            }}
          >
            <Upload
              beforeUpload={beforeUpload}
              fileList={fileList}
              onRemove={handleRemove}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <UploadOutlined
                  style={{
                    fontSize: "33px",
                  }}
                />
                <h4
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "159.5%",
                  }}
                >
                  Upload Image
                </h4>
                <p
                  style={{
                    color: "#979797",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "159.5%",
                  }}
                >
                  16:9 ratio is recommended. Max image size 1mb
                </p>
              </div>
            </Upload>
          </div>
        </Card>
      )}
    </>
  );
};

export default ImageUpload;
