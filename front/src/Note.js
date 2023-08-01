import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Note() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone(console.log("picture"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        기록하기
      </Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Box
            sx={{
              ml: 10,
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px dashed grey",
              padding: "20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <Typography variant="body1" gutterBottom flexWrap={1}>
              {isDragActive ? "Drop the picture here" : "Drag and drop"}
            </Typography>
            <Button variant="outlined" color="primary">
              Select Picture
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
