import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Menu, MenuItem, MenuList, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Menus() {
  const [anchorElement, setanchorElement] = useState(null);

  const handleOpenMenu = (e) => {
    setanchorElement(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleCloseMenu = (e) => {
    setanchorElement(null);
  };
  return (
    <Box
      component="div"
      sx={{
        zIndex: 1,
        position: "relative",
        backgroundImage: "url('Vector6.svg')",
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundImage: 'url("./friends.png")',
          height: "100vh",
          backgroundSize: { xs: "cover", md: "100% 100%" },
          position: "relative",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ color: "white" }}>
              WKND
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Button
              aria-controls="menu"
              sx={{ color: "white" }}
              onMouseOver={handleOpenMenu}
            >
              Galeria
            </Button>
            <Button  aria-controls="menu1" sx={{ color: "white" }}  onMouseOver={handleOpenMenu}>Servicios</Button>
            <Button aria-controls="menu2" sx={{ color: "white" }}  onMouseOver={handleOpenMenu}>Sobre Nosotros</Button>
            <Button aria-controls="menu3" sx={{ color: "white" }}  onMouseOver={handleOpenMenu}>Contacto</Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              startIcon={<AccountCircleIcon />}
              sx={{
                color: "white",
                borderRadius: "10%",
                border: "1px solid white",
                marginTop: 1,
              }}
            >
              Ingresar
            </Button>
          </Box>
        </Box>
        <Box component="div" sx={{ marginLeft: 3 }}>
          <Typography
            sx={{
              fontSize: { xs: "44px", md: "64px" },
              color: "white",
              width: "35%",
              textAlign: "left",
              position: "absolute",
              top: "50%",
              fontFamily: "Poppins",
              fontWeight: 800,
              opacity: 0.7,
              lineHeight: { xs: "55px", md: "55px" },
            }}
          >
            Las mejores vacaciones de tu vida
          </Typography>
        </Box>
      </Box>

      <Menu
        id="menu"
        anchorEl={anchorElement}
        onClose={handleCloseMenu}
        open={Boolean(anchorElement)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
      </Menu>
      <Menu
        id="menu1"
        anchorEl={anchorElement}
        onClose={handleCloseMenu}
        open={Boolean(anchorElement)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
      </Menu>
      <Menu
        id="menu2"
        anchorEl={anchorElement}
        onClose={handleCloseMenu}
        open={Boolean(anchorElement)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
      </Menu>
      <Menu
        id="menu3"
        anchorEl={anchorElement}
        onClose={handleCloseMenu}
        open={Boolean(anchorElement)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
        <MenuItem>Videos </MenuItem>
      </Menu>
    </Box>
  );
}

export default Menus;
