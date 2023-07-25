import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Note() {
  return (
    <Grid>
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {" "}
          </Typography>
        </CardContent>
      </Card>
      <Button fullwidth color="secondary" variant="outlined">
        기록
      </Button>
    </Grid>
  );
}
