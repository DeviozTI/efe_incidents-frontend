// import TableGrid from "../components/TableGrid";
import { Box, Card, CardActionArea, Chip, Typography } from "@mui/material";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import theme from "../../../../../theme";
import { useNavigate } from "react-router-dom";
import { useTrackingLine } from "../../../../hooks/useTrackingLine";

const DashboardTrackingLineList = () => {
  const navigate = useNavigate();
  const { setTrackingLineSelected } = useTrackingLine();
  const trackings = [
    {
      id: "1",
      title: "Error de login",
      typology: "Error de sistema",
      incidentDetail:
        "El día de hoy, a las 14:30 horas, se registró una incidencia en el área de producción de la planta, donde se detectó una fuga de sustancias químicas altamente corrosivas. El personal de seguridad actuó de inmediato, evacuando a los trabajadores y acordonando la zona afectada para prevenir cualquier riesgo adicional. Se notificó a los equipos de respuesta de emergencia y se implementaron medidas de contención para evitar la propagación del peligro. Se está llevando a cabo una investigación exhaustiva para determinar la causa raíz de la fuga y se están tomando medidas correctivas para garantizar la seguridad de todo el personal y la integridad de nuestras instalaciones.",
      reportingUser: "John Doe",
      assignedUser: "Jane Smith",
      attachments: true,
      status: "Abierto",
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
      status: "Completado",
      registrationDate: "2023-10-03",
      registrationTime: "10:45",
    },
  ];

  const handleViewTrackingLine = (tracking: any) => {
    navigate(`/admin/dashboard/tracking-line/${tracking.id}`);
    setTrackingLineSelected(tracking);
  };
  return (
    <LayoutDashboard>
      <h1>Hilo de seguimiento</h1>
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
        {trackings.map((tracking) => (
          <Card key={tracking.id}>
            <CardActionArea onClick={() => handleViewTrackingLine(tracking)}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                  padding: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>{tracking.title}</h2>
                  <Chip
                    label={tracking.status}
                    color={
                      tracking.status === "Abierto"
                        ? "error"
                        : tracking.status === "En proceso"
                        ? "warning"
                        : "success"
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      maxWidth: "80%",
                    }}
                  >
                    {tracking.incidentDetail}
                  </Typography>
                  <Typography>
                    <strong>Fecha:</strong> {tracking.registrationDate}
                  </Typography>
                </Box>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </LayoutDashboard>
  );
};

export default DashboardTrackingLineList;
