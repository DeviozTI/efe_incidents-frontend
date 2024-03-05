import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { BsList, BsPower } from "react-icons/bs";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./aside.module.css";
import { RoutesAdminPaths } from "../../../utils/routerPaths";
import Logo from "../../../assets/logo.png";
// import theme from "../../../../theme";

const Aside = () => {
  const { pathname } = useLocation();
  const router = useNavigate();

  const [linkSelected, setLinkSelected] = useState(pathname);
  const [collapse, setCollapse] = useState(false);
  const [broken, setBroken] = useState(false);
  const [toggled, setToggled] = useState(false);
  //   const { user, handleLogout, setUserAtom } = useAuth();

  //   if (!user) {
  //     router("/admin/auth");
  //   }

  const onClickLink = (path: string) => {
    setLinkSelected("/admin/dashboard/" + path);
    // router(`/admin/dashboard/${path}`);
    localStorage.removeItem("conversationSelected");
    router("/admin/dashboard/" + path);
  };

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (user) {
      // const userParse = JSON.parse(user);
      // setValidateRole(userParse.user.role.name_role);
    }
  }, []);

  useEffect(() => {
    const collapseLocal = localStorage.getItem("collapse");

    if (collapseLocal) {
      setCollapse(JSON.parse(collapseLocal));
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      //   const userParse = JSON.parse(userData);
      //   setUserAtom(userParse.user);
    }
  }, []);

  return (
    <div className={styles.container_pr}>
      <Sidebar
        className={styles.sidebar}
        collapsed={collapse}
        onBreakPoint={setBroken}
        breakPoint="xl"
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        backgroundColor="#0b2a49"
        width="300px"
        rootStyles={{
          color: "#fff",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div
            className={styles.navbar_img}
            onClick={() => onClickLink("/admin/dashboard")}
          >
            {collapse ? (
              <img
                style={{
                  width: "3rem",
                  height: "5rem",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={Logo}
                alt="logo"
              />
            ) : (
              <img
                style={{
                  width: "11rem",
                  height: "6rem",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={Logo}
                alt="logo"
              />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <Menu className={styles.sidebar_menu} closeOnClick={false}>
              {RoutesAdminPaths.map((route) => {
                if (route.subRoutes) {
                  return (
                    <SubMenu
                      key={route.label}
                      label={route.label}
                      icon={<route.icon />}
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      {route.subRoutes.map((subRoute) => (
                        <MenuItem
                          key={subRoute.path}
                          active={linkSelected.includes(subRoute.path)}
                          onClick={() => onClickLink(subRoute.path)}
                          className={styles.navbar_link_2}
                        >
                          {subRoute.label}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  );
                } else {
                  return (
                    <MenuItem
                      key={route.path}
                      active={linkSelected.includes(route.path)}
                      onClick={() => onClickLink(route.path)}
                      className={
                        linkSelected === `/admin/dashboard/${route.path}`
                          ? styles.navbar_link_2_active
                          : styles.navbar_link_2
                      }
                      icon={<route.icon />}
                    >
                      {route.label}
                    </MenuItem>
                  );
                }
              })}
            </Menu>
          </div>
          {/* {collapse ? (
            <Button
              onClick={() => {
                setCollapse(false);
                localStorage.setItem("collapse", "false");
              }}
            >
              <BsArrowBarRight size={30} />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setCollapse(true);
                localStorage.setItem("collapse", "true");
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <BsArrowBarLeft size={30} />
              Colapsar
            </Button>
          )} */}
          <div className={styles.navbar_user}>
            <img
              src="https://ih1.redbubble.net/image.3613329178.7530/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="avatar"
            />
            <div className={styles.navbar_user_data}>
              <h3>Jhon Doe</h3>
              <span>jhon@gmail.com</span>
            </div>

            <div
              className={styles.button_logout}
              onClick={() => {
                // handleLogout();
                router("/admin/auth");
              }}
            >
              <IconButton aria-label="delete" size="large" color="error">
                <BsPower
                  className={styles.navbar_icon_power}
                  size={20}
                  cursor="pointer"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </Sidebar>

      <IconButton
        style={{
          marginTop: "10px",
          marginLeft: "16px",
          position: "absolute",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => {
          setToggled(!toggled);
          //   setCollapse(true);
        }}
      >
        {broken && <BsList className="" size={30} />}
      </IconButton>
    </div>
  );
};

export default Aside;
