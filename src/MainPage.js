import { Box, Container } from "@mui/system";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function MainPage() {
  return (
    <Box sx={{ margin: -1 }}>
      <Container sx={{ textAlign: 'center', mt: 15 }}>
        <Box>
          <CloudCircleIcon sx={{ fontSize: 200, color: 'primary.main' }} />
        </Box>

        <TextField id="outlined-basic" label="검색" variant="outlined" sx={{
          mt: 5, width: 1 / 2, 
          '.MuiInputBase-root': {
            borderRadius: 10,
            borderColor: "primary.main",
          },
          '.MuiInputLabel-root': {
            color: "primary.main",
          },
          '.MuiInputLabel-root': {
            ml: 0.4,
            color: 'primary.main',
          }
        }} />


        <TableContainer component={Paper} sx={{ mt: 20, borderRadius: 10 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{bgcolor: 'primary.main'}}>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default MainPage;
