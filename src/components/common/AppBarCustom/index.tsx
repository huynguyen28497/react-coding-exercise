import { Toolbar, IconButton, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  avatar_img,
  bell_icon,
  menu_icon,
  people_icon,
  search,
  setting_icon,
} from "assets";
import { Box } from "@mui/system";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBarCustom = ({
  open = true,
  drawerWidth = "15vw",
  handleOpen = null as any,
}) => {
  const matches = useMediaQuery("(max-width:900px)");
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth})`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar
      open={open}
      position="fixed"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0px 1px 2px 0px #64748B1A",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { md: "none", lg: "none" } }}
          onClick={handleOpen}
        >
          <img style={{ width: 15, height: 15 }} src={menu_icon} />
        </IconButton>
        {(!open ||
          !matches) && (
            <Box width={"100%"} display="flex" justifyContent="right">
              <IconButton style={{ marginRight: 10 }}>
                <img style={{ width: 20, height: 20 }} src={search} />
              </IconButton>
              <IconButton style={{ marginRight: 10 }}>
                <img style={{ width: 20, height: 20 }} src={people_icon} />
              </IconButton>
              <IconButton style={{ marginRight: 10 }}>
                <img style={{ width: 20, height: 20 }} src={bell_icon} />
              </IconButton>
              <IconButton style={{ marginRight: 10 }}>
                <img style={{ width: 20, height: 20 }} src={setting_icon} />
              </IconButton>
              <IconButton style={{ marginRight: 10 }}>
                <img style={{ width: 40, height: 40 }} src={avatar_img} />
              </IconButton>
            </Box>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
