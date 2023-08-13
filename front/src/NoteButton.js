import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

export default function NoteButton(props) {
  const handleRadioChange = (event) => {
    props.setMealType(event.target.value); // Update the selected meal type when a radio button is clicked
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <Typography variant="h6" fontWeight={"bolder"}>
        식사 시간
      </Typography>
      <RadioGroup row onChange={handleRadioChange}>
        <FormControlLabel value="아침" control={<Radio />} label="아침" />
        <FormControlLabel value="점심" control={<Radio />} label="점심" />
        <FormControlLabel value="저녁" control={<Radio />} label="저녁" />
      </RadioGroup>
    </Box>
  );
}
