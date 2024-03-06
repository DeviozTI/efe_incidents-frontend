import { useEffect, useState } from "react";
import TableGrid from "../components/TableGrid";
import LayoutDashboard from "../layouts/LayoutDashboard";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { BsCloudUpload, BsJournal, BsX } from "react-icons/bs";
import ModalCustom from "../components/ModalCustom";
import theme from "../../../../theme";
import styles from "../dashboard.module.css";

// interface RowsProps {
//   id: string;
//   title: string;
//   typology: string;
//   incidentDetail: string;
//   reportingUser: string;
//   assignedUser: string;
//   attachments: boolean;
//   status: string;
//   registrationDate: string;
//   registrationTime: string;
// }

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const DashboardIncidentsRegister = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [rows, setRows] = useState([] as any);
  const [selectedFile, setSelectedFile] = useState<any>();
  const [formValues, setFormValues] = useState({
    id: "",
    title: "",
    typology: "",
    incidentDetail: "",
    reportingUser: "",
    assignedUser: "",
    attachments: false,
    status: "",
    registrationDate: "",
    registrationTime: "",
  });

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Título",
      width: 200,
    },
    {
      field: "typology",
      headerName: "Tipología",
      width: 200,
    },
    {
      field: "incidentDetail",
      headerName: "Detalle del incidente",
      width: 500,
    },
    {
      field: "reportingUser",
      headerName: "Usuario que reporta",
      width: 200,
    },
    {
      field: "assignedUser",
      headerName: "Usuario asignado",
      width: 200,
    },
    {
      field: "attachments",
      headerName: "Archivos adjuntos",
      width: 150,
      renderCell: (cellValues) => {
        return <span>{cellValues.value ? "Sí" : "No"}</span>;
      },
    },
    {
      field: "status",
      headerName: "Estado",
      width: 150,
      renderCell: (cellValues) => {
        let color;
        switch (cellValues.value) {
          case "Pendiente":
            color = "warning";
            break;
          case "En proceso":
            color = "info";
            break;
          case "Resuelto":
            color = "success";
            break;
          default:
            color = "default";
        }

        return <Chip label={cellValues.value} color={color as any} />;
      },
    },
    {
      field: "registrationDate",
      headerName: "Fecha registro",
      width: 150,
    },
    {
      field: "registrationTime",
      headerName: "Hora registro",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 300,
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
            <Button variant="contained" color="info">
              Seguimiento
            </Button>
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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const formatFileSize = (sizeInBytes: any) => {
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return sizeInMB.toFixed(2) + " MB";
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    setRows([
      {
        id: "1",
        title: "Error de login",
        typology: "Error de sistema",
        incidentDetail:
          "El usuario no puede iniciar sesión después de múltiples intentos.",
        reportingUser: "John Doe",
        assignedUser: "Jane Smith",
        attachments: true,
        status: "Pendiente",
        registrationDate: "2023-10-01",
        registrationTime: "08:00",
      },
      {
        id: "2",
        title: "Fallo de red",
        typology: "Problema de conectividad",
        incidentDetail:
          "Se reporta una caída completa de la red en el edificio principal.",
        reportingUser: "Emily Davis",
        assignedUser: "Michael Wilson",
        attachments: false,
        status: "En proceso",
        registrationDate: "2023-10-02",
        registrationTime: "09:30",
      },
      {
        id: "3",
        title: "Acceso denegado a recurso",
        typology: "Error de permisos",
        incidentDetail:
          "El usuario no tiene acceso al recurso compartido solicitado.",
        reportingUser: "David Martinez",
        assignedUser: "Jennifer Brown",
        attachments: true,
        status: "Resuelto",
        registrationDate: "2023-10-03",
        registrationTime: "10:45",
      },
    ]);
  }, []);

  return (
    <LayoutDashboard>
      <h1>Resumen de incidencias</h1>
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
          startIcon={<BsJournal />}
          onClick={() => setOpenModal(true)}
          sx={{
            width: "fit-content",
          }}
        >
          Agregar incidencia
        </Button>
        <TableGrid columns={columns} rows={rows} />
      </Box>

      <ModalCustom setOpenModal={setOpenModal} stateModal={openModal}>
        <>
          <Typography
            variant="h4"
            id="modal-modal-title"
            component="h2"
            align="center"
          >
            Agregar incidencia
          </Typography>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Box mb={2}>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Tipología"
                variant="outlined"
                fullWidth
                name="typology"
                value={formValues.typology}
                onChange={handleChange}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Usuario que reporta"
                variant="outlined"
                fullWidth
                name="reportingUser"
                value={formValues.reportingUser}
                onChange={handleChange}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Usuario asignado"
                variant="outlined"
                fullWidth
                name="assignedUser"
                value={formValues.assignedUser}
                onChange={handleChange}
              />
            </Box>
            {/* Status select */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="status"
                name="status"
                id="status"
                value={formValues.status}
                label="Estado"
                onChange={handleChange}
                sx={{
                  marginBottom: "1rem",
                }}
              >
                <MenuItem value={"Abierto"}>Abierto</MenuItem>
                <MenuItem value={"En revision"}>En revision</MenuItem>
                <MenuItem value={"En proceso"}>En proceso</MenuItem>
                <MenuItem value={"Completado"}>Completado</MenuItem>
              </Select>
            </FormControl>

            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Archivos adjuntos
              </InputLabel>
              <Select
                labelId="attachments"
                name="attachments"
                id="attachments"
                value={formValues.attachments}
                label="Archivos adjuntos"
                onChange={handleChange}
                sx={{
                  marginBottom: "1rem",
                }}
              >
                <MenuItem value={"true"}>Sí</MenuItem>
                <MenuItem value={"false"}>No</MenuItem>
              </Select>
            </FormControl> */}

            <Box mb={2}>
              <TextField
                label="Detalle del incidente"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="incidentDetail"
                value={formValues.incidentDetail}
                onChange={handleChange}
              />
            </Box>

            <Box>
              {!selectedFile && (
                <Button
                  fullWidth
                  component="label"
                  variant="contained"
                  color="info"
                  tabIndex={-1}
                  startIcon={<BsCloudUpload />}
                  sx={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleFileChange}
                  />
                </Button>
              )}

              {selectedFile && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    border: "1px solid #bfbfbf",
                    padding: "0.5rem"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "0.5rem",
                    }}
                  >
                    <p style={{ marginRight: "1rem" }}>
                      Archivo: {selectedFile.name}
                    </p>
                    <p style={{ marginRight: "1rem" }}>
                      Tamaño: {formatFileSize(selectedFile.size)}
                    </p>
                  </Box>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setSelectedFile(null)}
                    startIcon={<BsX />}
                  >
                    Remove
                  </Button>
                </Box>
              )}
            </Box>

            <Button type="submit" variant="contained" color="primary">
              Agregar
            </Button>
          </form>
        </>
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

export default DashboardIncidentsRegister;
