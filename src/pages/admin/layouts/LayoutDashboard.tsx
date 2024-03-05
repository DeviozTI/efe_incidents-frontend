import { Box } from "@mui/material";
import Aside from "../components/Aside";
import styles from "../dashboard.module.css";
import theme from "../../../../theme";

interface ILayoutDashboard {
  children: React.ReactNode;
  title?: string;
}

const LayoutDashboard = ({ children }: ILayoutDashboard) => {
  return (
    <div className={styles.dashboard_container}>
      <Aside />

      {/* Contenido */}
      <Box
        sx={{
          width: "100%",
          transition: "margin-left 0.5s",
          paddingLeft: "4rem",
          paddingRight: "2rem",
          paddingTop: "1rem",
          backgroundColor: "#f9f9f9",
          [theme.breakpoints.down("md")]: {
            paddingLeft: "2rem",
            paddingTop: "4rem",
          },
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default LayoutDashboard;
