import {
  BsBarChart,
  BsBell,
  // BsHouse,
  BsJournalArrowDown,
  BsJournalArrowUp,
  BsNodePlus,
  BsPersonGear,
} from "react-icons/bs";
import DashboardHome from "../pages/admin/views/DashboardHome";
import DashboardIncidents from "../pages/admin/views/DashboardIncidents";
import DashboardIncidentsRegister from "../pages/admin/views/DashboardIncidentsRegister";
import DashboardTrackingLine from "../pages/admin/views/DashboardTrackingLine";
import DashboardExportInfo from "../pages/admin/views/DashboardExportInfo";
import DashboardManagmentUser from "../pages/admin/views/DashboardManagmentUser";

export const RouterAdminEnum = {
  HOME: "home",
  INCIDENTS: "incidents",
  REGISTER_INCIDENTS: "register-incidents",
  TRACKING_LINE: "tracking-line",
  EXPORT_INFO: "export-info",
  MANAGMENT_USER: "managment-user",
};

interface IRoute {
  path: string;
  role: string[];
  label: string;
  showInSidebar: boolean;
  icon: React.ComponentType;
  component: React.ComponentType;
  subRoutes?: { path: string; label: string }[];
}

export const RoutesAdminPaths: IRoute[] = [
  // {
  //   path: RouterAdminEnum.HOME,
  //   role: ["manager"],
  //   label: "Home",
  //   showInSidebar: true,
  //   icon: BsHouse,
  //   component: DashboardHome,
  // },
  {
    path: RouterAdminEnum.INCIDENTS,
    role: ["manager", "agent"],
    label: "Graficos",
    showInSidebar: true,
    icon: BsBarChart,
    component: DashboardIncidents,
  },
  {
    path: RouterAdminEnum.REGISTER_INCIDENTS,
    role: ["manager"],
    label: "Resumen de incidencias",
    icon: BsJournalArrowUp,
    component: DashboardIncidentsRegister,
    showInSidebar: true,
  },
  {
    path: RouterAdminEnum.TRACKING_LINE,
    role: ["manager"],
    label: "Hilo de seguimiento",
    icon: BsNodePlus,
    component: DashboardTrackingLine,
    showInSidebar: true,
  },
  {
    path: RouterAdminEnum.EXPORT_INFO,
    role: ["manager"],
    label: "Exportar información",
    icon: BsJournalArrowDown,
    component: DashboardExportInfo,
    showInSidebar: true,
  },
  {
    path: RouterAdminEnum.MANAGMENT_USER,
    role: ["manager"],
    label: "Administración",
    icon: BsPersonGear,
    component: DashboardManagmentUser,
    showInSidebar: true,
  },
  {
    path: RouterAdminEnum.HOME,
    role: ["manager"],
    label: "Gestionar notificaciones",
    icon: BsBell,
    component: DashboardHome,
    showInSidebar: true,
    subRoutes: [
      { path: "/admin/dashboard/notifications", label: "Ver notificaciones" },
      {
        path: "/admin/dashboard/notifications/settings",
        label: "Configuración",
      },
    ],
  },
];
