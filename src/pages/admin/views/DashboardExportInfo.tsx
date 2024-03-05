import { Box, Button, TextField } from "@mui/material";
// import TableGrid from "../components/TableGrid";
import LayoutDashboard from "../layouts/LayoutDashboard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { BsCloudDownload } from "react-icons/bs";
import theme from "../../../../theme";

const DashboardExportInfo = () => {
  return (
    <LayoutDashboard>
      <h1>Exportar informacion</h1>
      {/* <TableGrid /> */}
      <Box
        sx={{
          display: "flex",
          columnGap: "1rem",
          marginTop: "1rem",
          width: "90%",

          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            rowGap: "1rem",
            width: "95%",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Fecha" />
        </LocalizationProvider>
        <TextField label="Usuario" variant="outlined" />
        <TextField label="Tipologia" variant="outlined" />
        <Button variant="contained" endIcon={<BsCloudDownload />}>
          Exportar
        </Button>
      </Box>
    </LayoutDashboard>
  );
};

export default DashboardExportInfo;
