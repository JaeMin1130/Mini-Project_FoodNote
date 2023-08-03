import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function NutritionTable(props) {
  const info = props.foodInfo;
  const keyList = [
    "brand",
    "calories",
    "carbohydrate",
    "protein",
    "fat",
    "sugars",
    "sodium",
    "cholesterol",
    "caffeine",
  ];
  return (
    <TableContainer sx={{ bgcolor: "transparent" }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>{info.name} </TableCell>
            <TableCell>1회 제공량당 함량({info.serving_size}g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keyList.map((key) => (
            <TableRow key={info[key]}>
              <TableCell component="th" scope="info">
                {key}
              </TableCell>
              <TableCell component="th" scope="info">
                {info[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
