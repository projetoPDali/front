import React, { useState } from "react";
import axios from "axios";

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        // Replace with your backend API endpoint
        const response = await axios.post(
          "http://localhost:3001/foto",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("File uploaded successfully:", response.data);
        // You can handle success in your UI, e.g., showing a success message
      } catch (error) {
        console.error("File upload failed:", error);
        // Handle errors as needed, e.g., display an error message to the user
      }
    }
  };
};
