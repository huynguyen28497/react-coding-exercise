import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { house_icon, logo } from "assets";
import React from "react";

const NavTab = () => {
  const drawerWidth = '15vw';
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#111827",
          color: "#10B981",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box paddingTop={"28px"} paddingBottom={"28px"} paddingLeft={"24px"}>
        <img style={{ width: 42, height: 33 }} src={logo} />
      </Box>
      <Typography paddingLeft={1} color={"#9CA3AF"}>
        General
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <img style={{ width: 16, height: 16 }} src={house_icon} />
          </ListItemIcon>
          <ListItemText primary={"Main"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavTab;
