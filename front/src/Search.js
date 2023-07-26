import { Button, Grid, TextField } from "@mui/material";

const Search = () => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md="auto">
        <TextField placeholder="Name of Food" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField placeholder="Quantity of Food" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button fullwidth style={{ height: "100%" }} color="secondary" variant="outlined">
          검색
        </Button>
      </Grid>
    </Grid>
  );
};
export default Search;
