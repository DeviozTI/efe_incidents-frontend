import { Box } from "@mui/material";
import { DataGrid, GridColDef, esES } from "@mui/x-data-grid";
import theme from "../../../../theme";

// const columns: GridColDef[] = [
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

interface Props {
  columns: GridColDef[];
  rows: Array<any>;
}

export default function TableGrid({ columns, rows }: Props) {
  return (
    <Box
      sx={{
        height: 400,
        width: "90%",
        [theme.breakpoints.down("xl")]: {
          width: "84%",
        },
        [theme.breakpoints.down("lg")]: {
          width: "100%",
        },
      }}
    >
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}
