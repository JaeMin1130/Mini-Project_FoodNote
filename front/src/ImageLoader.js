import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Fab, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import imageCompression from "browser-image-compression";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageLoader() {
  const [imageUpload, setImageUpload] = useState([]);
  const [uploadPreview, setUploadPreview] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleImageCompress = async (file) => {
    const options = {
      maxSizeMB: 0.2, // Maximum image size
      maxWidthOrHeight: 500, // Maximum width or height
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % imageUpload.length);
  };

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + imageUpload.length) % imageUpload.length);
  };

  const handleDeletePhoto = (index, event) => {
    event.stopPropagation(); // Prevent click event from propagating to parent elements
    setImageUpload((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const compressedFiles = await Promise.all(acceptedFiles.map((file) => handleImageCompress(file)));
        const validCompressedFiles = compressedFiles.filter((file) => file !== null);
        setImageUpload([...imageUpload, ...validCompressedFiles]);
        setUploadPreview(validCompressedFiles.map((file) => URL.createObjectURL(file)));
      }
    },
    [imageUpload, handleImageCompress]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <Box sx={{ display: "flex", alignContent: "center", justifyContent: "space-evenly", mt: 3 }}>
      <IconButton onClick={handlePreviousPhoto}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box
        {...getRootProps()}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center the image vertically
          width: "50%",
          aspectRatio: "1 / 1", // Make the Box container square
          border: isDragActive ? "2px solid tomato" : "2px solid grey",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {imageUpload.length > 0 ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={URL.createObjectURL(imageUpload[currentPhotoIndex])}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                transition: "opacity 0.5s",
              }}
            />
            {imageUpload.map((file, index) => (
              <IconButton
                key={index}
                onClick={(event) => handleDeletePhoto(index, event)} // Pass the event parameter to the handler
                sx={{
                  position: "absolute",
                  right: -5,
                  top: -5,
                }}
              >
                <Fab
                  color="primary"
                  size="small"
                  sx={{ bgcolor: "transparent", width: "30px", height: 0, borderRadius: "20%" }}
                >
                  <ClearIcon fontSize="small" />
                </Fab>
              </IconButton>
            ))}
          </Box>
        ) : (
          <Typography variant="h5" alignSelf={"center"}>
            {isDragActive ? "Drop the Photo here." : "Drag a photo here."}
          </Typography>
        )}
        <IconButton
          sx={{
            position: "absolute",
            right: 1,
            bottom: 1,
          }}
        >
          <Fab
            color="primary"
            size="small"
            sx={{
              bgcolor: imageUpload.length > 0 ? "transparent" : "",
              width: "30px",
              height: 0,
            }}
          >
            <AddIcon fontSize="small" />
          </Fab>
        </IconButton>
      </Box>
      <IconButton onClick={handleNextPhoto}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
