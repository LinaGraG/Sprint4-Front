import React from "react";
import "../../assets/styles/artelak-navbar.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Divider, Drawer } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  FaHome,
  FaBoxes,
  FaHeart,
  FaShoppingCart,
  FaAddressBook,
  FaUser,
} from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";

import {
  SearchContainer,
  IconNavLink,
} from "./ArtelakNavbarStyled";

import { Badge } from "@mui/material";

import { Image, ChakraProvider } from "@chakra-ui/react";

import imgLogo from "/images/logo/artelak20cm.png";

import { Link, useLocation } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import Search from "./Search";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const ArtelakLogoWrapper = styled("div")(() => ({
  height: "55px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SearchBarButton = styled("div")(() => ({
  border: "none",
  fontSize: "20px",
  borderRadius: "50%",
  minHeight: "40px",
  minWidth: "40px",
  color: "white",
  background: "#cc9e6a",
  cursor: "pointer",
  BorderColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    borderRadius: "5px",
    backgroundColor: "#cc9e6a",
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    borderRadius: "5px",
    backgroundColor: "#cc9e6a",
    "&, & .MuiListItemIcon-root": {
      color: "ywhite",
    },
  },
});

const ArtelakNavbar = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <StyledEngineProvider injectFirst>
        <AppBar
          position="static"
          style={{
            background: "#12284C",
            height: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <div className="appbar__wrapper">
              <div className="appbar__logo">
                <IconButton
                  className="appbar__menu"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 1 }}
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <ArtelakLogoWrapper>
                  <ChakraProvider>
                    <Image src={imgLogo} alt="Logo" height="40px" />
                  </ChakraProvider>
                </ArtelakLogoWrapper>
              </div>
              <div className="appbar__search">
                <Search />
              </div>
              <div className="appbar__icons">
                <IconNavLink to="/home">
                  <FaHome size={25} />
                </IconNavLink>
                <IconNavLink to="/login">
                  <FaUser size={25} />
                </IconNavLink>
                <IconNavLink to="/products">
                  <FaBoxes size={25} />
                </IconNavLink>
                <IconNavLink to="/cart">
                  <Badge
                    badgeContent={1}
                    sx={{
                      marginRight: "10px",
                      "& .MuiBadge-badge": {
                        right: -5,
                        color: "white",
                        backgroundColor: "#cc9e6a",
                      },
                    }}
                  >
                    <FaShoppingCart size={25} />
                  </Badge>
                </IconNavLink>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <SearchContainer>
          <Search />
        </SearchContainer>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#12284C",
              color: "white",
            },
          }}
        >
          <Box p={2} width="250px" role="presentation" textAlign="center">
            <DrawerHeader>
              <Typography variant="h6" component="div">
                Menú
              </Typography>
              <IconButton onClick={() => setIsDrawerOpen(false)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon style={{ color: "white" }} />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider style={{ background: "white" }} />
            <StyledList>
              <ListItem
                component={Link}
                to="/home"
                selected={"/home" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaHome size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/login"
                selected={"/login" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <GoSignIn size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Ingresar" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/products"
                selected={"/products" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaBoxes size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Productos" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/favorites"
                selected={"/favorites" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaHeart size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Favoritos" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/cart"
                selected={"/cart" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaShoppingCart size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Carrito" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/contact"
                selected={"/contact" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaAddressBook size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Contácto" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="#"
                selected={"#" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <GoSignOut size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Salir" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/dashboard"
                selected={"/dashboard" === location.pathname}
                onClick={() => setIsDrawerOpen(false)}
                disablePadding
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <MdDashboard size={25}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </StyledList>
          </Box>
        </Drawer>
      </StyledEngineProvider>
    </>
  );
};

export default ArtelakNavbar;
