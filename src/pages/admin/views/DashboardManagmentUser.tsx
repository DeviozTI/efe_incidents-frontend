import { Box, Button, TextField, Typography } from "@mui/material";
import TableGrid from "../components/TableGrid";
import LayoutDashboard from "../layouts/LayoutDashboard";
import { BsPersonAdd } from "react-icons/bs";
import ModalCustom from "../components/ModalCustom";
import { useEffect, useState } from "react";
import styles from "../dashboard.module.css";
import { GridColDef } from "@mui/x-data-grid";
import theme from "../../../../theme";

const DashboardManagmentUser = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [rows, setRows] = useState([
    { id: "", name: "", user: "", role: "", tipology: "" },
  ]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
    },
    {
      field: "user",
      headerName: "Usuario",
      width: 250,
    },
    {
      field: "role",
      headerName: "Rol",
      width: 200,
    },
    {
      field: "tipology",
      headerName: "Tipologia",
      width: 100,
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 200,
      renderCell: (cellValues) => {
        const handleEdit = () => {
          setOpenModal(true);
          console.log("Editar", cellValues.id);
        };

        const handleDelete = () => {
          setOpenModalDelete(true);
          console.log("Eliminar", cellValues.id);
        };

        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              columnGap: "1rem",
            }}
          >
            <Button variant="contained" color="info" onClick={handleEdit}>
              Editar
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Eliminar
            </Button>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    setRows([
      {
        id: "1",
        name: "John Doe",
        user: "johndoe@example.com",
        role: "Admin",
        tipology: "A",
      },
      {
        id: "2",
        name: "Jane Smith",
        user: "janesmith@example.com",
        role: "User",
        tipology: "B",
      },
      {
        id: "3",
        name: "Robert Johnson",
        user: "robertjohnson@example.com",
        role: "Editor",
        tipology: "C",
      },
      {
        id: "4",
        name: "Emily Davis",
        user: "emilydavis@example.com",
        role: "User",
        tipology: "B",
      },
      {
        id: "5",
        name: "Michael Wilson",
        user: "michaelwilson@example.com",
        role: "Admin",
        tipology: "A",
      },
      {
        id: "6",
        name: "Jennifer Brown",
        user: "jenniferbrown@example.com",
        role: "Editor",
        tipology: "C",
      },
      {
        id: "7",
        name: "William Taylor",
        user: "williamtaylor@example.com",
        role: "User",
        tipology: "B",
      },
      {
        id: "8",
        name: "Jessica Anderson",
        user: "jessicaanderson@example.com",
        role: "User",
        tipology: "B",
      },
      {
        id: "9",
        name: "David Martinez",
        user: "davidmartinez@example.com",
        role: "Admin",
        tipology: "A",
      },
      {
        id: "10",
        name: "Sarah Thomas",
        user: "sarahthomas@example.com",
        role: "Editor",
        tipology: "C",
      },
    ]);
  }, []);

  return (
    <LayoutDashboard>
      <h1>Administracion de usuarios</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          marginTop: "1rem",
          width: "90%",
          [theme.breakpoints.down("md")]: {
            width: "95%",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<BsPersonAdd />}
          onClick={() => setOpenModal(true)}
          sx={{
            width: "fit-content",
          }}
        >
          Agregar usuario
        </Button>
        <TableGrid columns={columns} rows={rows} />
      </Box>

      <ModalCustom setOpenModal={setOpenModal} stateModal={openModal}>
        <Typography
          variant="h4"
          id="modal-modal-title"
          component="h2"
          align="center"
        >
          Agregar usuario
        </Typography>
        <form className={styles.form}>
          <Box>
            <TextField label="Nombre" variant="outlined" fullWidth />
          </Box>
          <Box>
            <TextField
              label="Correo"
              type="email"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Button variant="contained" color="primary">
            Agregar
          </Button>
        </form>
      </ModalCustom>

      <ModalCustom
        setOpenModal={setOpenModalDelete}
        stateModal={openModalDelete}
      >
        <Typography variant="h4" align="center">
          ¿Estás seguro de eliminar esta incidencia?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            columnGap: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpenModalDelete(false)}
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModalDelete(false)}
          >
            Cancelar
          </Button>
        </Box>
      </ModalCustom>
    </LayoutDashboard>
  );
};

export default DashboardManagmentUser;
