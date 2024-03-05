import { useState } from "react";
import {
  Snackbar,
  Alert,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./auth.module.css";
import theme from "../../../../theme";
import { Link } from "react-router-dom";

interface IRegister {
  names: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({});
  const [isLoading, setIsLoading] = useState(false);
  const [dataToast, setDataToast] = useState({
    show: false,
    severity: "",
    message: "",
  });

  const onRegister = async (data: IRegister) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1588464864517-e3707bd8449f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "::after": {
          content: "''",
          position: "absolute",
          zindex: 1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <Snackbar
        open={false}
        autoHideDuration={3000}
        onClose={() =>
          setDataToast({
            show: false,
            severity: "",
            message: "",
          })
        }
      >
        <Alert
          onClose={() =>
            setDataToast({
              show: false,
              severity: "",
              message: "",
            })
          }
          sx={{ width: "100%" }}
        >
          {dataToast.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={dataToast.show}
        autoHideDuration={3000}
        onClose={() =>
          setDataToast({
            show: false,
            severity: "",
            message: "",
          })
        }
      >
        <Alert
          onClose={() =>
            setDataToast({
              show: false,
              severity: "",
              message: "",
            })
          }
          sx={{ width: "100%" }}
        >
          {dataToast.message}
        </Alert>
      </Snackbar>

      <Card
        sx={{
          width: "40rem",
          padding: "2rem",
          zIndex: 2,
          borderRadius: "1rem",
          boxShadow: "0px 0px 13px -5px rgba(0,0,0,0.71)",

          [theme.breakpoints.down("md")]: {
            width: "90%",
            padding: "1rem",
          },
        }}
      >
        <CardContent>
          <form
            onSubmit={handleSubmit(onRegister)}
            className={styles.container_form}
          >
            <Typography variant="h2" align="center">
              Regístrate
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              quos.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                placeholder="Jhon Doe"
                type="text"
                label="Nombres"
                variant="outlined"
                {...register("names", {
                  required: { value: true, message: "Campo requerido" },
                })}
              />
              {errors.names && (
                <Typography
                  color="red"
                  sx={{ width: "80%" }}
                  textAlign={"left"}
                >
                  {errors.names.message}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                placeholder="email@example.com"
                type="email"
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: { value: true, message: "Campo requerido" },
                  validate: (value) => {
                    const regex =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
                    return regex.test(value) || "Email invalido";
                  },
                })}
              />
              {errors.email && (
                <Typography
                  color="red"
                  sx={{ width: "80%" }}
                  textAlign={"left"}
                >
                  {errors.email.message}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Contraseña"
                variant="outlined"
                placeholder="**********"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida",
                  },
                })}
                type="password"
                fullWidth
              />
              {errors.password && (
                <Typography
                  color="red"
                  sx={{ width: "80%" }}
                  textAlign={"left"}
                >
                  {errors.password.message}
                </Typography>
              )}
            </Box>

            {!isLoading ? (
              <Button
                type={"button"}
                variant="contained"
                sx={{
                  padding: "0.8rem 1.8rem",
                  width: "50%",
                  color: "#FFF",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                }}
              >
                Registrarse
              </Button>
            ) : (
              <CircularProgress />
            )}
          </form>
          <Typography
            component="p"
            sx={{
              marginTop: "1rem",
            }}
          >
            ¿Ya tienes cuenta?
            <Link to="/auth/login"> Inicia sesión</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
