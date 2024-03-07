import { Box, Chip, IconButton, TextField, Typography } from "@mui/material";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import theme from "../../../../../theme";
import { useTrackingLine } from "../../../../hooks/useTrackingLine";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DashboardTrackingLineElement = () => {
  const navigate = useNavigate();
  const { valueAtomTrackingLineParsed } = useTrackingLine();
  console.log(valueAtomTrackingLineParsed);

  return (
    <LayoutDashboard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "1rem",
          columnGap: "1rem",
        }}
      >
        <IconButton
          aria-label="back"
          size="medium"
          onClick={() => navigate("/admin/dashboard/tracking-line")}
        >
          <BsChevronLeft />
        </IconButton>
        <h1>{`Hilo - ${valueAtomTrackingLineParsed.title}`}</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          marginTop: "1rem",
          width: "60%",
          [theme.breakpoints.down("md")]: {
            width: "95%",
          },
        }}
      >
        <p>
          <strong>Fecha:</strong> {valueAtomTrackingLineParsed.registrationDate}
        </p>
        <Chip
          label="Abierto"
          sx={{
            width: "fit-content",
          }}
          color={
            valueAtomTrackingLineParsed.status === "Abierto"
              ? "info"
              : valueAtomTrackingLineParsed.status === "En proceso"
              ? "warning"
              : "success"
          }
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>{valueAtomTrackingLineParsed.incidentDetail}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Comentarios
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              rowGap: "1rem",
              padding: "1rem",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {Array(20)
              .fill(0)
              .map(() => (
                <Box
                  sx={{
                    width: "fit-content",
                    backgroundColor: "#f0f2f5",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Typography fontWeight={"700"}>Jhon Doe</Typography>
                  <Typography>
                    Con respecto a la incidencia, se ha tomado la decisión de
                    que el área de soporte técnico se encargue de la misma. Se
                    ha asignado el ticket #1234 para su seguimiento. Gracias.
                  </Typography>
                </Box>
              ))}
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "1rem",
              paddingTop: "2rem",
              width: "100%",
              position: "relative",
            }}
          >
            <TextField
              label="Agregar comentario"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              maxRows={4}
              sx={{
                height: "fit-content",
              }}
            />
            {/* <IconButton
              color="primary"
              aria-label="send message"
              size="large"
              sx={{
                position: "absolute",
                right: "1rem",
                top: "1rem",
                paddingLeft: "2rem",
              }}
            >
              <BsSend />
            </IconButton> */}
          </Box>
        </Box>
      </Box>
    </LayoutDashboard>
  );
};

export default DashboardTrackingLineElement;
